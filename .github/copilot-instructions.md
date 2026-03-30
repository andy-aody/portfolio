# 项目指南

## 架构概览

基于 Next.js 14 (App Router) 的个人 Portfolio 单页应用，左固定右滚动双栏布局。

```
app/[locale]/           # 国际化动态路由 (/en, /zh)
components/layout/      # 布局组件：LeftPanel, RightPanel, MobileNav
components/sections/    # 内容 Section：About, Skills, Experience, Projects, Education
components/ui/          # 可复用 UI：ThemeToggle, LanguageSwitcher, SkillBadge 等
messages/               # 中英文 JSON 翻译文件（也是全部内容数据源）
i18n/                   # next-intl 路由与请求配置
lib/                    # TypeScript 类型定义与工具函数
```

## 构建与运行

```bash
npm run dev      # 开发服务器 (端口 3200，非默认 3000)
npm run build    # 生产构建
npm run lint     # ESLint 检查
```

**⚠️ 端口**: 开发服务器使用 **3200** 端口（Windows Hyper-V 保留了 2976–3075 端口范围），不要改回 3000。

## 技术约定

### 国际化 (i18n)
- 双语：`en` / `zh`，默认 `en`
- 所有内容存放在 `messages/en.json` 和 `messages/zh.json`
- Server Component 用 `getTranslations()`，Client Component 用 `useTranslations()`
- 获取对象/数组数据用 `t.raw("key")`，获取字符串用 `t("key")`
- URL 格式：`/en`, `/zh`

### 主题
- Tailwind `darkMode: "class"` + `next-themes`
- 默认深色主题，不跟随系统
- 强调色：紫色系（dark: `violet-400`，light: `violet-600`）
- 深浅切换用 `dark:` 前缀

### 组件规范
- Server Component 默认，仅需交互或浏览器 API 时标记 `"use client"`
- Props 类型用 `type Props = { ... }`，数据模型用 `interface`
- 全部 `export default function`，PascalCase 命名
- 主题相关客户端组件须用 `mounted` 状态防止 hydration 不匹配

### 样式
- 纯 Tailwind CSS 原子类，不写自定义 CSS
- 响应式断点：`lg` (1024px) 为桌面/移动分界
- 深浅双色通过 `dark:` 变体处理
- 全局工具类：`accent-text`, `accent-bg`, `accent-border`

### 数据管理
- 无 CMS / 数据库，JSON 静态硬编码
- 修改内容 = 编辑 `messages/*.json` → 重新部署
- 类型定义在 `lib/types.ts`

## 需要注意

- Node.js 版本需 ≥ 18.17（项目用 nvm，当前 v22.0.0）
- `@/*` 路径别名指向项目根目录
- `middleware.ts` 处理 locale 检测和重定向，排除 `api`、`_next`、静态文件路径
- SEO metadata 通过 `generateMetadata()` 动态生成，数据从 `messages` 读取
