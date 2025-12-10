# 蔡蔡的小宇宙

一个温暖、人文的个人网站，记录跑步日记、编程学习、阅读摘录和生活感悟。

## ✨ 特色

- 🏃‍♀️ **跑步日记系统** - 记录每一次跑步的公里数、心情和小故事
- 💭 **心理服务** - 温暖、包容的心理支持空间
- 🌱 **成长之路** - 记录成长过程中的思考和感悟
- 🤖 **AI探索** - 用技术理解人，用代码表达关怀
- 📚 **资源库** - 分享有用的资源和学习材料

## 🎨 设计理念

- **奶油白色配色** - 优雅、克制、温暖的 INFJ 风格
- **人文关怀** - 强调"慢慢来，也很好"的理念
- **被接住的感觉** - 每一个文字都希望传达温暖和包容

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
my-site/
├── app/
│   ├── brand/          # 个人品牌页面（蔡蔡的小宇宙）
│   ├── run-tracker/    # 跑步日记系统
│   ├── components/     # 共享组件
│   └── page.tsx        # 首页
├── lib/                # 工具函数
│   ├── supabaseClient.ts      # Supabase 客户端配置
│   └── supabase-examples.ts   # Supabase 使用示例
├── app/
│   └── api/
│       └── supabase-test/     # Supabase 连接测试 API
└── public/             # 静态资源
```

## 🛠️ 技术栈

- **Next.js 15** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Supabase** - 后端数据库和认证服务

## 📝 环境变量配置

### Supabase 数据库连接

1. **复制环境变量模板**：
   ```bash
   cp env.example .env.local
   ```

2. **获取 Supabase 凭证**：
   - 登录 [Supabase Dashboard](https://app.supabase.com)
   - 选择你的项目（或创建新项目）
   - 进入 **Settings** → **API**
   - 复制以下信息到 `.env.local`：
     - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
     - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`（可选，仅用于服务端高权限操作）

3. **测试连接**：
   - 启动开发服务器：`npm run dev`
   - 访问 `http://localhost:3000/api/supabase-test` 查看连接状态

详细配置说明请查看 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

### 环境变量文件示例

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here  # 可选
```

## 🌟 页面说明

- `/` - 首页，欢迎来到小宇宙
- `/brand` - 个人品牌主页
- `/brand/psychology` - 心理服务
- `/brand/growth` - 成长之路
- `/brand/ai-lab` - AI探索
- `/brand/resources` - 资源库
- `/run-tracker` - 跑步日记系统

## 💝 设计哲学

> 慢慢来，也很好。  
> 在这里，你可以慢慢来，可以停下来，也可以继续往前走。

每一个页面都希望传达温暖、包容和被接住的感觉。不需要完美，只需要真实地存在。

## 📄 License

MIT

---

Made with ❤️ by 蔡蔡
