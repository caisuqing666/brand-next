import { NextRequest, NextResponse } from 'next/server';
import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';
import fs from 'fs';

// 品牌颜色定义 - 参照 brand-next 风格
const COLORS = {
  creamBg1: '#fef9f3', // 最浅奶油色
  creamBg2: '#f6ecdf', // 中奶油色
  creamBg3: '#eedfce', // 深奶油色
  textPrimary: '#2f251f', // 深咖啡色 - 主文字
  textSecondary: '#4d4036', // 深咖啡色（稍浅）- 次要文字
  textMuted: '#7a695b', // 柔和文字
  accent: '#c39b7b', // 强调色
  shadow: 'rgba(108, 82, 64, 0.12)', // 阴影色
};

// 小红书标准尺寸
const WIDTH = 1242;
const HEIGHT = 1656;

// 绘制圆角矩形（兼容旧版本 canvas）
function drawRoundedRect(
  ctx: any,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// 绘制默认背景
function drawDefaultBackground(ctx: any) {
  // 绘制品牌风格的渐变背景（参照 brand-next）
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.creamBg1);
  gradient.addColorStop(0.45, COLORS.creamBg2);
  gradient.addColorStop(1, COLORS.creamBg3);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 添加径向渐变叠加（增加高级感）
  const radial1 = ctx.createRadialGradient(WIDTH * 0.15, HEIGHT * 0.18, 0, WIDTH * 0.15, HEIGHT * 0.18, WIDTH * 0.7);
  radial1.addColorStop(0, 'rgba(212, 181, 160, 0.14)');
  radial1.addColorStop(1, 'transparent');
  ctx.fillStyle = radial1;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const radial2 = ctx.createRadialGradient(WIDTH * 0.82, HEIGHT * 0.12, 0, WIDTH * 0.82, HEIGHT * 0.12, WIDTH * 0.45);
  radial2.addColorStop(0, 'rgba(189, 149, 127, 0.12)');
  radial2.addColorStop(1, 'transparent');
  ctx.fillStyle = radial2;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 添加细微纹理（模拟纸张质感）
  ctx.fillStyle = 'rgba(250, 248, 245, 0.2)';
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const size = Math.random() * 1.5;
    ctx.fillRect(x, y, size, size);
  }
}

// 自动换行函数
function wrapText(
  ctx: any,
  text: string,
  maxWidth: number,
  lineHeight: number
): string[] {
  const words = text.split('\n');
  const lines: string[] = [];
  
  for (const word of words) {
    if (word.trim() === '') {
      lines.push('');
      continue;
    }
    
    let currentLine = '';
    const chars = word.split('');
    
    for (const char of chars) {
      const testLine = currentLine + char;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        currentLine = char;
      } else {
        currentLine = testLine;
      }
    }
    
    if (currentLine !== '') {
      lines.push(currentLine);
    }
  }
  
  return lines;
}

export async function POST(request: NextRequest) {
  try {
    const { title, subtitle, content, type, images = [], backgroundImage } = await request.json();

    // 封面模式必须有标题，内页模式必须有标题或内容
    if (type === 'cover' && !title) {
      return NextResponse.json(
        { error: '封面模式需要填写标题' },
        { status: 400 }
      );
    }

    if (type === 'content' && !title && !content) {
      return NextResponse.json(
        { error: '内页模式需要填写标题或正文内容' },
        { status: 400 }
      );
    }

    // 创建画布
    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');

    // 如果有背景图片，使用背景图片；否则使用默认渐变背景（封面和内页都支持）
    if (backgroundImage) {
      try {
        // 加载背景图片
        const bgImg = await loadImage(backgroundImage);
        
        // 计算缩放比例，确保图片覆盖整个画布
        const scaleX = WIDTH / bgImg.width;
        const scaleY = HEIGHT / bgImg.height;
        const scale = Math.max(scaleX, scaleY); // 使用较大的缩放比例以确保覆盖
        
        const scaledWidth = bgImg.width * scale;
        const scaledHeight = bgImg.height * scale;
        
        // 居中绘制背景图片
        const x = (WIDTH - scaledWidth) / 2;
        const y = (HEIGHT - scaledHeight) / 2;
        
        ctx.drawImage(bgImg, x, y, scaledWidth, scaledHeight);
      } catch (error) {
        console.error('加载背景图片失败，使用默认背景:', error);
        // 如果加载失败，使用默认背景
        drawDefaultBackground(ctx);
      }
    } else {
      // 使用默认渐变背景
      drawDefaultBackground(ctx);
    }

    // 设置文字样式
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (type === 'cover') {
      // 封面专用字体体系
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      // 1. 封面主标题（最大元素）
      // 位置：顶部 20% 区域
      const titleStartY = HEIGHT * 0.2;
      const titleFontSize = 125; // 主标题 125px
      const titleLineHeight = titleFontSize * 1.1; // 行距 1.1
      const titleColor = '#2f251f'; // 深咖啡色（参照 brand-next）
      const titleMaxWidth = WIDTH - 120; // 左右各留 60px 边距
      
      ctx.fillStyle = titleColor;
      ctx.font = `600 ${titleFontSize}px "Iowan Old Style", "Palatino", "Georgia", "Noto Serif SC", serif`;
      
      // 如果有背景图片，添加文字描边和阴影以确保可读性
      if (backgroundImage) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 4;
      }
      
      const titleLines = wrapText(ctx, title, titleMaxWidth, titleLineHeight);
      titleLines.forEach((line, index) => {
        const y = titleStartY + index * titleLineHeight;
        
        if (backgroundImage) {
          // 绘制描边
          ctx.strokeText(line, 60, y);
          // 绘制阴影
          ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
          ctx.shadowBlur = 6;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 2;
        }
        
        ctx.fillText(line, 60, y);
        
        if (backgroundImage) {
          ctx.shadowBlur = 0;
          ctx.lineWidth = 0;
        }
      });

      // 2. 封面金句（副标题）
      // 位置：主标题下方，增加间距让封面更有呼吸感
      const subtitleStartY = titleStartY + titleLines.length * titleLineHeight + 96; // 从 72px 增加到 96px，增加更多空间
      const subtitleFontSize = 60; // 副标题 60px
      const subtitleLineHeight = subtitleFontSize * 1.3; // 行距 1.3
      const subtitleColor = '#2f251f'; // 深咖啡色（参照 brand-next）
      const subtitleMaxWidth = WIDTH - 120;
      
      if (subtitle) {
        ctx.fillStyle = subtitleColor;
        ctx.font = `400 ${subtitleFontSize}px "Iowan Old Style", "Palatino", "Georgia", "Noto Serif SC", serif`;
        
        if (backgroundImage) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 3;
        }
        
        const subtitleLines = wrapText(ctx, subtitle, subtitleMaxWidth, subtitleLineHeight);
        subtitleLines.forEach((line, index) => {
          const y = subtitleStartY + index * subtitleLineHeight;
          
          if (backgroundImage) {
            ctx.strokeText(line, 60, y);
            ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;
          }
          
          ctx.fillText(line, 60, y);
          
          if (backgroundImage) {
            ctx.shadowBlur = 0;
            ctx.lineWidth = 0;
          }
        });
      }

      // 重置对齐方式
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
    } else {
      // 内页样式：精致排版，参照 brand-next 风格
      let currentY = 200;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      // 如果有标题，先绘制标题（更大更优雅）
      if (title && title.trim()) {
        ctx.fillStyle = COLORS.textPrimary;
        ctx.font = 'bold 72px "Iowan Old Style", "Palatino", "Georgia", "Noto Serif SC", serif';
        const titleLines = wrapText(ctx, title, WIDTH - 240, 90);
        titleLines.forEach((line, index) => {
          // 如果有背景图片，添加文字描边和阴影以确保可读性
          if (backgroundImage) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.lineWidth = 4;
            ctx.strokeText(line, 120, currentY + index * 90);
            ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 2;
          } else {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 2;
          }
          ctx.fillText(line, 120, currentY + index * 90);
          ctx.shadowBlur = 0;
          ctx.lineWidth = 0;
        });
        currentY += titleLines.length * 90 + 60; // 标题后更大的间距
      }

      // 如果有副标题，绘制副标题
      if (subtitle && subtitle.trim()) {
        ctx.fillStyle = COLORS.textSecondary;
        ctx.font = '40px "Iowan Old Style", "Palatino", "Georgia", "Noto Serif SC", serif';
        const subtitleLines = wrapText(ctx, subtitle, WIDTH - 240, 55);
        subtitleLines.forEach((line, index) => {
          // 如果有背景图片，添加文字描边和阴影
          if (backgroundImage) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 3;
            ctx.strokeText(line, 120, currentY + index * 55);
            ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;
          } else {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.03)';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;
          }
          ctx.fillText(line, 120, currentY + index * 55);
          ctx.shadowBlur = 0;
          ctx.lineWidth = 0;
        });
        currentY += subtitleLines.length * 55 + 50; // 副标题后间距
      }

      // 绘制正文内容（内页字体体系，支持标题和正文）
      if (content && content.trim()) {
        // 内页字体体系定义
        const h1Config = {
          fontSize: 52,
          fontWeight: 600,
          color: '#3A2F2C',
          lineHeight: 52 * 1.2, // 行距 1.2
          bottomSpacing: 32, // 底部间距 32px
        };
        
        const h2Config = {
          fontSize: 44,
          fontWeight: 500,
          color: '#4B3F3C',
          lineHeight: 44 * 1.3, // 行距 1.3
          bottomSpacing: 24, // 底部间距
        };
        
        const bodyConfig = {
          fontSize: 36,
          fontWeight: 400,
          color: '#4B3F3C',
          lineHeight: 36 * 1.6, // 行距 1.6（阅读体验超级舒服）
          paragraphSpacing: 24, // 每段之间空 24px
        };
        
        // 按段落分割（保留空行）
        const paragraphs = content.split('\n');
        
        // 计算每个段落的位置，用于插入图片
        const paragraphPositions: number[] = [];
        let tempY = currentY;
        
        // 先计算所有段落的位置
        paragraphs.forEach((paragraph: string) => {
          const trimmed = paragraph.trim();
          if (trimmed === '') {
            tempY += bodyConfig.paragraphSpacing;
          } else if (trimmed.startsWith('# ')) {
            // 一级标题
            const text = trimmed.substring(2);
            ctx.font = `${h1Config.fontWeight} ${h1Config.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            const lines = wrapText(ctx, text, WIDTH - 240, h1Config.lineHeight);
            lines.forEach(() => {
              tempY += h1Config.lineHeight;
            });
            tempY += h1Config.bottomSpacing;
            paragraphPositions.push(tempY);
          } else if (trimmed.startsWith('## ')) {
            // 二级标题
            const text = trimmed.substring(3);
            ctx.font = `${h2Config.fontWeight} ${h2Config.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            const lines = wrapText(ctx, text, WIDTH - 240, h2Config.lineHeight);
            lines.forEach(() => {
              tempY += h2Config.lineHeight;
            });
            tempY += h2Config.bottomSpacing;
            paragraphPositions.push(tempY);
          } else {
            // 正文
            ctx.font = `${bodyConfig.fontWeight} ${bodyConfig.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            const lines = wrapText(ctx, trimmed, WIDTH - 240, bodyConfig.lineHeight);
            lines.forEach(() => {
              tempY += bodyConfig.lineHeight;
            });
            tempY += bodyConfig.paragraphSpacing;
            paragraphPositions.push(tempY);
          }
        });
        
        // 按位置排序图片
        const sortedImages = [...images].sort((a, b) => a.position - b.position);
        
        // 绘制段落和插入图片（使用 for...of 以支持 await）
        let imageIndex = 0;
        let paragraphCount = 0; // 用于图片位置计算
        
        for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
          const paragraph = paragraphs[paraIndex];
          const trimmed = paragraph.trim();
          
          if (trimmed === '') {
            // 空行，增加间距
            currentY += bodyConfig.paragraphSpacing;
          } else if (trimmed.startsWith('# ')) {
            // 一级标题（大节标题）
            const text = trimmed.substring(2);
            ctx.fillStyle = h1Config.color;
            ctx.font = `${h1Config.fontWeight} ${h1Config.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            
            const lines = wrapText(ctx, text, WIDTH - 240, h1Config.lineHeight);
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
              const line = lines[lineIndex];
              if (currentY > HEIGHT - 120) {
                break;
              }
              ctx.fillText(line, 120, currentY);
              currentY += h1Config.lineHeight;
            }
            currentY += h1Config.bottomSpacing; // 底部间距 32px
            paragraphCount++;
            
            // 插入图片逻辑（复用原有代码）
            while (imageIndex < sortedImages.length && sortedImages[imageIndex].position === paragraphCount) {
              const imageData = sortedImages[imageIndex];
              try {
                const img = await loadImage(imageData.data);
                const maxWidth = WIDTH - 240;
                const maxHeight = 400;
                let imgWidth = img.width;
                let imgHeight = img.height;
                
                if (imgWidth > maxWidth) {
                  const ratio = maxWidth / imgWidth;
                  imgWidth = maxWidth;
                  imgHeight = imgHeight * ratio;
                }
                
                if (imgHeight > maxHeight) {
                  const ratio = maxHeight / imgHeight;
                  imgHeight = maxHeight;
                  imgWidth = imgWidth * ratio;
                }
                
                const imgX = (WIDTH - imgWidth) / 2;
                currentY += 30;
                
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                
                const radius = 12;
                ctx.fillStyle = 'white';
                drawRoundedRect(ctx, imgX - 10, currentY - 10, imgWidth + 20, imgHeight + 20, radius);
                ctx.fill();
                
                ctx.drawImage(img, imgX, currentY, imgWidth, imgHeight);
                ctx.restore();
                
                currentY += imgHeight + 40;
              } catch (error) {
                console.error('加载图片失败:', error);
              }
              imageIndex++;
            }
          } else if (trimmed.startsWith('## ')) {
            // 二级标题（分段标题）
            const text = trimmed.substring(3);
            ctx.fillStyle = h2Config.color;
            ctx.font = `${h2Config.fontWeight} ${h2Config.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            
            const lines = wrapText(ctx, text, WIDTH - 240, h2Config.lineHeight);
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
              const line = lines[lineIndex];
              if (currentY > HEIGHT - 120) {
                break;
              }
              // 如果有背景图片，添加文字描边和阴影
              if (backgroundImage) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.lineWidth = 2;
                ctx.strokeText(line, 120, currentY);
                ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 1;
              }
              ctx.fillText(line, 120, currentY);
              if (backgroundImage) {
                ctx.shadowBlur = 0;
                ctx.lineWidth = 0;
              }
              currentY += h2Config.lineHeight;
            }
            currentY += h2Config.bottomSpacing;
            paragraphCount++;
            
            // 插入图片逻辑
            while (imageIndex < sortedImages.length && sortedImages[imageIndex].position === paragraphCount) {
              const imageData = sortedImages[imageIndex];
              try {
                const img = await loadImage(imageData.data);
                const maxWidth = WIDTH - 240;
                const maxHeight = 400;
                let imgWidth = img.width;
                let imgHeight = img.height;
                
                if (imgWidth > maxWidth) {
                  const ratio = maxWidth / imgWidth;
                  imgWidth = maxWidth;
                  imgHeight = imgHeight * ratio;
                }
                
                if (imgHeight > maxHeight) {
                  const ratio = maxHeight / imgHeight;
                  imgHeight = maxHeight;
                  imgWidth = imgWidth * ratio;
                }
                
                const imgX = (WIDTH - imgWidth) / 2;
                currentY += 30;
                
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                
                const radius = 12;
                ctx.fillStyle = 'white';
                drawRoundedRect(ctx, imgX - 10, currentY - 10, imgWidth + 20, imgHeight + 20, radius);
                ctx.fill();
                
                ctx.drawImage(img, imgX, currentY, imgWidth, imgHeight);
                ctx.restore();
                
                currentY += imgHeight + 40;
              } catch (error) {
                console.error('加载图片失败:', error);
              }
              imageIndex++;
            }
          } else {
            // 正文（主文本）
            ctx.fillStyle = bodyConfig.color;
            ctx.font = `${bodyConfig.fontWeight} ${bodyConfig.fontSize}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
            
            const lines = wrapText(ctx, trimmed, WIDTH - 240, bodyConfig.lineHeight);
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
              const line = lines[lineIndex];
              if (currentY > HEIGHT - 120) {
                break;
              }
              // 如果有背景图片，添加文字描边和阴影
              if (backgroundImage) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.lineWidth = 2;
                ctx.strokeText(line || ' ', 120, currentY);
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 3;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 1;
              }
              ctx.fillText(line || ' ', 120, currentY);
              if (backgroundImage) {
                ctx.shadowBlur = 0;
                ctx.lineWidth = 0;
              }
              currentY += bodyConfig.lineHeight;
            }
            currentY += bodyConfig.paragraphSpacing; // 每段之间空 24px
            paragraphCount++;
            
            // 插入图片逻辑
            while (imageIndex < sortedImages.length && sortedImages[imageIndex].position === paragraphCount) {
              const imageData = sortedImages[imageIndex];
              try {
                const img = await loadImage(imageData.data);
                const maxWidth = WIDTH - 240;
                const maxHeight = 400;
                let imgWidth = img.width;
                let imgHeight = img.height;
                
                if (imgWidth > maxWidth) {
                  const ratio = maxWidth / imgWidth;
                  imgWidth = maxWidth;
                  imgHeight = imgHeight * ratio;
                }
                
                if (imgHeight > maxHeight) {
                  const ratio = maxHeight / imgHeight;
                  imgHeight = maxHeight;
                  imgWidth = imgWidth * ratio;
                }
                
                const imgX = (WIDTH - imgWidth) / 2;
                currentY += 30;
                
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                
                const radius = 12;
                ctx.fillStyle = 'white';
                drawRoundedRect(ctx, imgX - 10, currentY - 10, imgWidth + 20, imgHeight + 20, radius);
                ctx.fill();
                
                ctx.drawImage(img, imgX, currentY, imgWidth, imgHeight);
                ctx.restore();
                
                currentY += imgHeight + 40;
              } catch (error) {
                console.error('加载图片失败:', error);
              }
              imageIndex++;
            }
          }
        }
        
        // 处理位置为 0 的图片（标题后）
        while (imageIndex < sortedImages.length && sortedImages[imageIndex].position === 0) {
          const imageData = sortedImages[imageIndex];
          try {
            const img = await loadImage(imageData.data);
            const maxWidth = WIDTH - 240;
            const maxHeight = 400;
            let imgWidth = img.width;
            let imgHeight = img.height;
            
            if (imgWidth > maxWidth) {
              const ratio = maxWidth / imgWidth;
              imgWidth = maxWidth;
              imgHeight = imgHeight * ratio;
            }
            
            if (imgHeight > maxHeight) {
              const ratio = maxHeight / imgHeight;
              imgHeight = maxHeight;
              imgWidth = imgWidth * ratio;
            }
            
            const imgX = (WIDTH - imgWidth) / 2;
            currentY += 30;
            
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            
            const radius = 12;
            ctx.fillStyle = 'white';
            drawRoundedRect(ctx, imgX - 10, currentY - 10, imgWidth + 20, imgHeight + 20, radius);
            ctx.fill();
            
            ctx.drawImage(img, imgX, currentY, imgWidth, imgHeight);
            ctx.restore();
            
            currentY += imgHeight + 40;
          } catch (error) {
            console.error('加载图片失败:', error);
          }
          imageIndex++;
        }
        
        // 处理位置为最大值的图片（结尾）
        const maxPosition = paragraphs.filter((p: string) => p.trim() !== '').length + 1;
        while (imageIndex < sortedImages.length && sortedImages[imageIndex].position >= maxPosition) {
          const imageData = sortedImages[imageIndex];
          try {
            const img = await loadImage(imageData.data);
            const maxWidth = WIDTH - 240;
            const maxHeight = 400;
            let imgWidth = img.width;
            let imgHeight = img.height;
            
            if (imgWidth > maxWidth) {
              const ratio = maxWidth / imgWidth;
              imgWidth = maxWidth;
              imgHeight = imgHeight * ratio;
            }
            
            if (imgHeight > maxHeight) {
              const ratio = maxHeight / imgHeight;
              imgHeight = maxHeight;
              imgWidth = imgWidth * ratio;
            }
            
            const imgX = (WIDTH - imgWidth) / 2;
            currentY += 30;
            
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            
            const radius = 12;
            ctx.fillStyle = 'white';
            drawRoundedRect(ctx, imgX - 10, currentY - 10, imgWidth + 20, imgHeight + 20, radius);
            ctx.fill();
            
            ctx.drawImage(img, imgX, currentY, imgWidth, imgHeight);
            ctx.restore();
            
            currentY += imgHeight + 40;
          } catch (error) {
            console.error('加载图片失败:', error);
          }
          imageIndex++;
        }
      }
    }

    // 转换为 Buffer
    const buffer = canvas.toBuffer('image/png');

    // 返回图片
    return new NextResponse(buffer as any, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="xiaohongshu-${type}.png"`,
      },
    });
  } catch (error) {
    console.error('生成图片失败:', error);
    return NextResponse.json(
      { error: '生成图片失败' },
      { status: 500 }
    );
  }
}

