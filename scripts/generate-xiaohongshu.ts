// 生成小红书内页图片的脚本
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

// 颜色定义
const COLORS = {
  creamBg: '#faf8f5',
  textPrimary: '#2f251f',
  textSecondary: '#4d4036',
};

const WIDTH = 1242;
const HEIGHT = 1656;

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

// 生成图片
function generateImage(content: string, outputPath: string) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // 绘制背景
  ctx.fillStyle = COLORS.creamBg;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 添加细微纹理
  ctx.fillStyle = 'rgba(250, 248, 245, 0.3)';
  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const size = Math.random() * 2;
    ctx.fillRect(x, y, size, size);
  }

  // 绘制文字
  let currentY = 180;
  ctx.textAlign = 'left';
  ctx.fillStyle = COLORS.textPrimary;
  ctx.font = '32px "PingFang SC", "Microsoft YaHei", sans-serif';

  const paragraphs = content.split('\n');
  const lineHeight = 50;
  const paragraphSpacing = 30;

  paragraphs.forEach((paragraph) => {
    if (paragraph.trim() === '') {
      currentY += paragraphSpacing;
    } else {
      const lines = wrapText(ctx, paragraph, WIDTH - 200, lineHeight);
      lines.forEach((line) => {
        if (currentY > HEIGHT - 100) {
          return;
        }
        ctx.fillText(line || ' ', 100, currentY);
        currentY += lineHeight;
      });
      currentY += paragraphSpacing;
    }
  });

  // 保存图片
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`图片已生成: ${outputPath}`);
}

// 用户提供的内容
const content = `当我第一次在手机上看到：

"蔡蔡的小宇宙

你好，我是蔡蔡。"

那一刻真的好想哭。

一个原本只存在我脑海里的世界，

现在可以在任何人的手机里亮起。

这不是网页，

这是我过去多年跑步的坚持、

心理学的学习、

写作的力量、

以及这几天一次次不放弃的结果。

我在用技术长出真正的自己。`;

// 生成图片
const outputDir = path.join(process.cwd(), 'public', 'generated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'xiaohongshu-content.png');
generateImage(content, outputPath);

