# Personal Portfolio

基于 Next.js 14 App Router 构建的个人作品集网站，采用左侧固定、右侧滚动的双栏布局，支持中英双语与深浅主题切换，适合作为全栈开发工程师的在线简历与项目展示页。

## 项目特点

- 基于 Next.js 14 + TypeScript + Tailwind CSS
- 支持 `en` / `zh` 双语路由切换
- 支持深色 / 浅色主题切换，默认深色
- 单页滚动式信息架构，适合展示个人经历与项目
- 内容统一维护在 `messages/*.json`
- 使用 Next.js Metadata API 生成 SEO 信息
- 可直接部署到 Vercel

## 页面结构

网站当前包含以下内容板块：

- About
- Skills
- Experience
- Projects
- Education
- Contact

桌面端为左固定右滚动布局，移动端退化为顶部导航加单栏滚动。

## 技术栈

| 类别   | 方案                    |
| ------ | ----------------------- |
| 框架   | Next.js 14 (App Router) |
| 语言   | TypeScript              |
| 样式   | Tailwind CSS            |
| 国际化 | next-intl               |
| 主题   | next-themes             |
| 图标   | lucide-react            |
| SEO    | Next.js Metadata API    |
| 部署   | Vercel                  |

## 本地开发

### 环境要求

- Node.js >= 18.17
- npm

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

开发服务器固定运行在 `3200` 端口：

```text
http://localhost:3200
```

### 常用命令

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## 项目结构

```text
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── i18n/
├── lib/
├── messages/
├── public/
├── middleware.ts
├── tailwind.config.ts
└── package.json
```

### 目录说明

- `app/[locale]/`: 国际化页面入口，分别对应 `/en` 和 `/zh`
- `components/layout/`: 页面整体布局相关组件
- `components/sections/`: 各内容板块组件
- `components/ui/`: 通用 UI 组件
- `messages/`: 中英文文案与内容数据源
- `i18n/`: 路由与请求配置
- `lib/`: 类型定义与工具函数
- `public/images/`: 项目图片与静态资源

## 内容维护

项目不依赖 CMS 或数据库，所有展示内容都在 JSON 文件中维护。

### 文案与数据

- 英文内容：`messages/en.json`
- 中文内容：`messages/zh.json`

这些文件同时承担：

- 页面文本翻译
- 个人介绍内容
- 技能分类与标签
- 工作经历
- 项目列表
- 教育背景
- 联系方式
- SEO metadata 文案

修改内容后重新构建或重新部署即可生效。

## 国际化约定

- 支持语言：`en`、`zh`
- 默认语言：`en`
- 路由形式：`/en`、`/zh`
- Server Component 使用 `getTranslations()`
- Client Component 使用 `useTranslations()`
- 读取对象或数组时使用 `t.raw("key")`

## 主题约定

- 使用 `next-themes` 管理主题
- `darkMode: "class"`
- 默认深色主题，不跟随系统
- 强调色为紫色系

## SEO

项目已集成以下 SEO 能力：

- 页面 metadata 动态生成
- Open Graph 基础信息
- `sitemap.ts`
- `robots.ts`
- 多语言 alternates

如需完善分享卡片，可在 `public/` 中补充 OG 图片资源。
