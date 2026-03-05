# Supabase 快速配置指南

## 🚀 5 分钟快速配置

### 步骤 1: 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com)
2. 点击 "Start your project" 或 "New Project"
3. 填写项目信息：
   - **Name**: brand-next（或你喜欢的名字）
   - **Database Password**: 设置一个强密码（保存好！）
   - **Region**: 选择离你最近的区域
4. 点击 "Create new project"，等待项目创建完成（约 2 分钟）

### 步骤 2: 获取 API 密钥

1. 在 Supabase Dashboard 中，点击左侧菜单的 **Settings**（⚙️）
2. 选择 **API**
3. 复制以下信息：
   - **Project URL** - 类似 `https://xxxxx.supabase.co`
   - **anon public** key - 长字符串，以 `eyJ...` 开头

### 步骤 3: 配置环境变量

1. 在项目根目录创建 `.env.local` 文件：
   ```bash
   cp env.example .env.local
   ```

2. 编辑 `.env.local`，填入你的 Supabase 信息：
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=你的anon密钥
   ```

### 步骤 4: 测试连接

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 在浏览器中访问：
   ```
   http://localhost:3000/api/supabase-test
   ```

3. 如果看到 `"success": true`，说明连接成功！🎉

## 📊 创建第一个数据表

### 在 Supabase Dashboard 中创建表

1. 点击左侧菜单的 **Table Editor**
2. 点击 **New Table**
3. 填写表信息：
   - **Name**: `consultations`（咨询预约表，示例）
   - **Description**: 咨询预约记录
4. 添加列：
   - `id` - uuid, Primary Key, Default: `gen_random_uuid()`
   - `name` - text, Not Null
   - `email` - text, Not Null
   - `phone` - text
   - `service` - text
   - `message` - text
   - `created_at` - timestamptz, Default: `now()`
5. 点击 **Save**

### 启用 Row Level Security (RLS)

1. 在表编辑器中，点击 **Policies** 标签
2. 点击 **Enable RLS**（推荐启用，保护数据安全）
3. 如果需要允许所有人插入数据（仅用于测试），可以创建策略：
   - 点击 **New Policy**
   - **Policy Name**: Allow public insert
   - **Allowed Operation**: INSERT
   - **Policy Definition**: `true`（允许所有人插入）
   - 点击 **Save**

## 💻 在代码中使用

### 客户端组件示例

```typescript
'use client'

import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

export default function ConsultationsList() {
  const [consultations, setConsultations] = useState([])

  useEffect(() => {
    async function fetchConsultations() {
      const { data, error } = await supabase
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('错误:', error)
        return
      }

      setConsultations(data || [])
    }

    fetchConsultations()
  }, [])

  return (
    <div>
      <h2>咨询预约列表</h2>
      {consultations.map((item) => (
        <div key={item.id}>
          <p>{item.name} - {item.email}</p>
        </div>
      ))}
    </div>
  )
}
```

### 插入数据示例

```typescript
async function submitConsultation(formData: any) {
  const { data, error } = await supabase
    .from('consultations')
    .insert([formData])
    .select()

  if (error) {
    console.error('提交失败:', error)
    return null
  }

  return data
}
```

## 🔐 安全建议

1. **启用 RLS**：为所有表启用 Row Level Security
2. **设置策略**：根据你的需求设置适当的访问策略
3. **服务角色密钥**：仅在服务端使用，不要暴露给客户端
4. **环境变量**：`.env.local` 已自动排除在 Git 中

## 📚 更多资源

- [Supabase 官方文档](https://supabase.com/docs)
- [项目详细配置说明](./SUPABASE_SETUP.md)
- [使用示例代码](./lib/supabase-examples.ts)

## ❓ 常见问题

### Q: 连接测试失败？
A: 检查：
1. `.env.local` 文件是否存在
2. 环境变量值是否正确（没有多余空格）
3. 重启开发服务器
4. 检查 Supabase 项目是否正常运行

### Q: 需要代理才能访问？
A: 在 `.env.local` 中添加：
```env
HTTPS_PROXY=http://127.0.0.1:7890
```

### Q: 如何查看数据库中的数据？
A: 在 Supabase Dashboard → Table Editor 中查看

---

配置完成后，你就可以在项目中使用 Supabase 了！🎉







