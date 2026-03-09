'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageItem {
  id: string;
  file: File;
  preview: string;
  position: number; // 在内容中的位置（段落索引）
}

export default function XiaohongshuGenerator() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState<'cover' | 'content'>('cover');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const preview = event.target?.result as string;
          const newImage: ImageItem = {
            id: Date.now().toString() + Math.random(),
            file,
            preview,
            position: 0, // 默认位置
          };
          setImages((prev) => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  // 删除图片
  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  // 更新图片位置
  const updateImagePosition = (id: string, position: number) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, position } : img))
    );
  };

  // 处理背景图片上传
  const handleBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const preview = event.target?.result as string;
        setBackgroundImage(preview);
        setBackgroundFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // 清除背景图片
  const clearBackground = () => {
    setBackgroundImage(null);
    setBackgroundFile(null);
  };

  // 将图片转换为 base64
  const convertImagesToBase64 = async (): Promise<Array<{ data: string; position: number }>> => {
    const imageData = await Promise.all(
      images.map(async (img) => {
        return new Promise<{ data: string; position: number }>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              data: reader.result as string,
              position: img.position,
            });
          };
          reader.readAsDataURL(img.file);
        });
      })
    );
    return imageData;
  };

  // 将背景图片转换为 base64
  const convertBackgroundToBase64 = async (): Promise<string | null> => {
    if (!backgroundFile) return null;
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(backgroundFile);
    });
  };

  const generateImage = async () => {
    // 封面模式必须有标题，内页模式必须有标题或内容
    if (type === 'cover' && !title.trim()) {
      alert('封面模式需要填写标题');
      return;
    }

    if (type === 'content' && !title.trim() && !content.trim()) {
      alert('内页模式需要填写标题或正文内容');
      return;
    }

    setLoading(true);
    try {
      // 转换图片为 base64
      const imageData = type === 'content' ? await convertImagesToBase64() : [];
      const backgroundData = await convertBackgroundToBase64(); // 封面和内页都支持背景图

      const response = await fetch('/api/generate-xiaohongshu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          subtitle,
          content,
          type,
          images: imageData,
          backgroundImage: backgroundData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: '未知错误' }));
        throw new Error(errorData.error || `生成图片失败 (${response.status})`);
      }

      const blob = await response.blob();
      
      // 检查是否是有效的图片
      if (!blob.type.startsWith('image/')) {
        throw new Error('服务器返回的不是图片文件');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `xiaohongshu-${type}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('生成图片失败:', error);
      const errorMessage = error?.message || '生成图片失败，请重试';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="brand-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '2rem',
          color: 'var(--color-text-primary)',
          textAlign: 'center'
        }}>
          小红书图片生成器
        </h1>

        <div style={{
          background: 'var(--color-card-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 2px 8px var(--color-shadow)',
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)',
              fontWeight: 600
            }}>
              类型
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setType('cover')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: `2px solid ${type === 'cover' ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: type === 'cover' ? 'var(--color-accent)' : 'transparent',
                  color: type === 'cover' ? 'white' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
              >
                封面 (1242×1656px)
              </button>
              <button
                onClick={() => setType('content')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: `2px solid ${type === 'content' ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: type === 'content' ? 'var(--color-accent)' : 'transparent',
                  color: type === 'content' ? 'white' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
              >
                内页 (1242×1656px)
              </button>
            </div>
          </div>

          {/* 背景图片上传（封面和内页都支持） */}
          {(type === 'cover' || type === 'content') && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: 'var(--color-text-primary)',
                fontWeight: 600
              }}>
                背景图片 <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(可选，上传后会作为{type === 'cover' ? '封面' : '内页'}背景)</span>
              </label>
              {backgroundImage ? (
                <div style={{
                  position: 'relative',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: 'white',
                }}>
                  <Image
                    src={backgroundImage}
                    alt="背景预览"
                    width={1200}
                    height={800}
                    unoptimized
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      display: 'block',
                      height: 'auto',
                    }}
                  />
                  <button
                    onClick={clearBackground}
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    移除
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBackgroundUpload}
                    style={{ display: 'none' }}
                    id="background-upload"
                  />
                  <label
                    htmlFor="background-upload"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      border: '2px dashed var(--color-border)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      color: 'var(--color-text-secondary)',
                      background: 'rgba(255, 255, 255, 0.5)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                    }}
                  >
                    🖼️ 点击上传背景图片
                  </label>
                </>
              )}
            </div>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)',
              fontWeight: 600
            }}>
              主标题 <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>({type === 'cover' ? '必填' : '可选'})</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="请输入主标题"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--color-text-primary)',
                fontSize: '1rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)',
              fontWeight: 600
            }}>
              副标题 <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(可选)</span>
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="请输入副标题"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--color-text-primary)',
                fontSize: '1rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)',
              fontWeight: 600
            }}>
              正文内容 <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(可选，内页使用)</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`使用 Markdown 风格标记：
# 一级标题（大节标题）
## 二级标题（分段标题）
普通文本是正文内容

示例：
# 第一章
这是正文内容，会自动换行。

## 第一节
更多正文内容...`}
              rows={8}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--color-text-primary)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
            />
          </div>

          {/* 图片上传区域（仅内页模式） */}
          {type === 'content' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: 'var(--color-text-primary)',
                fontWeight: 600
              }}>
                插入图片 <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(可选，内页使用)</span>
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                style={{
                  display: 'block',
                  padding: '1rem',
                  border: '2px dashed var(--color-border)',
                  borderRadius: '10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-text-secondary)',
                  background: 'rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                }}
              >
                📷 点击上传图片（可多选）
              </label>

              {/* 已上传的图片预览 */}
              {images.length > 0 && (
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {images.map((img) => {
                    const paragraphs = content.split('\n').filter(p => p.trim() !== '');
                    const maxPosition = paragraphs.length;
                    return (
                      <div
                        key={img.id}
                        style={{
                          border: '1px solid var(--color-border)',
                          borderRadius: '10px',
                          padding: '1rem',
                          background: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <Image
                            src={img.preview}
                            alt="预览"
                            width={100}
                            height={100}
                            unoptimized
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '1px solid var(--color-border)',
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                              <label style={{ 
                                fontSize: '0.9rem',
                                color: 'var(--color-text-secondary)',
                                display: 'block',
                                marginBottom: '0.25rem'
                              }}>
                                插入位置（段落后）：
                              </label>
                              <select
                                value={img.position}
                                onChange={(e) => updateImagePosition(img.id, parseInt(e.target.value))}
                                style={{
                                  width: '100%',
                                  padding: '0.5rem',
                                  borderRadius: '6px',
                                  border: '1px solid var(--color-border)',
                                  background: 'white',
                                  color: 'var(--color-text-primary)',
                                  fontSize: '0.9rem',
                                }}
                              >
                                <option value={0}>开头（标题后）</option>
                                {Array.from({ length: maxPosition }, (_, i) => (
                                  <option key={i + 1} value={i + 1}>
                                    第 {i + 1} 段后
                                  </option>
                                ))}
                                <option value={maxPosition + 1}>结尾</option>
                              </select>
                            </div>
                            <button
                              onClick={() => removeImage(img.id)}
                              style={{
                                padding: '0.5rem 1rem',
                                background: 'transparent',
                                border: '1px solid var(--color-accent)',
                                color: 'var(--color-accent)',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--color-accent)';
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--color-accent)';
                              }}
                            >
                              删除
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <button
            onClick={generateImage}
            disabled={loading || (type === 'cover' && !title.trim()) || (type === 'content' && !title.trim() && !content.trim())}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              borderRadius: '25px',
              background: loading || (type === 'cover' && !title.trim()) || (type === 'content' && !title.trim() && !content.trim()) ? 'var(--color-text-muted)' : 'var(--color-accent)',
              color: 'white',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: loading || (type === 'cover' && !title.trim()) || (type === 'content' && !title.trim() && !content.trim()) ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px var(--color-shadow)',
            }}
          >
            {loading ? '生成中...' : '生成图片并下载'}
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'var(--color-card-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: '15px',
          color: 'var(--color-text-secondary)',
          fontSize: '0.9rem',
          lineHeight: '1.6',
        }}>
          <h3 style={{ 
            color: 'var(--color-text-primary)', 
            marginBottom: '0.5rem',
            fontSize: '1.1rem'
          }}>
            使用说明：
          </h3>
          <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
            <li>封面：适合展示标题和副标题，简洁大气</li>
            <li>内页：支持 Markdown 风格标记</li>
            <li style={{ marginTop: '0.5rem' }}><strong>内页格式：</strong></li>
            <li style={{ marginLeft: '1rem' }}>• <code># 标题</code> - 一级标题（52px，字重600）</li>
            <li style={{ marginLeft: '1rem' }}>• <code>## 标题</code> - 二级标题（44px，字重500）</li>
            <li style={{ marginLeft: '1rem' }}>• 普通文本 - 正文（36px，字重400，行距1.6）</li>
            <li style={{ marginTop: '0.5rem' }}>图片尺寸：1242×1656px（小红书标准尺寸）</li>
            <li>风格：奶油色背景 + 深咖色文字，与品牌风格一致</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
