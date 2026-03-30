# Plan: 全栈工程师 Personal Portfolio 网站

## TL;DR

基于 Brittany Chiang 的 portfolio 风格，为全栈开发工程师打造一个差异化的个人作品集网站。使用 Next.js 14+ (App Router) + Tailwind CSS，支持中英双语切换和深浅双主题，静态 JSON 管理内容，部署到 Vercel。目标两天完成。

## 需求摘要

- **职业定位**: 全栈开发工程师
- **目标受众**: 全部（国内外招聘方、自由职业客户、技术社区）
- **内容板块**: Hero、About、Experience、Projects、Skills、Contact、Education（共 7 个板块）
- **语言**: 中英双语切换 (i18n)
- **配色**: 深浅双主题切换（差异化于 Brittany 的纯深色方案）
- **技术栈**: Next.js 14+ (App Router) + Tailwind CSS + TypeScript
- **交互动效**: 暂不需要
- **内容管理**: 静态 JSON 硬编码
- **SEO**: 需要 meta/OG 标签优化
- **部署**: Vercel
- **域名**: 计划购买自定义域名
- **时间**: 两天完成

## 技术选型

| 功能     | 方案                 | 版本     |
| -------- | -------------------- | -------- |
| 框架     | Next.js (App Router) | 14+      |
| 语言     | TypeScript           | 5+       |
| 样式     | Tailwind CSS         | 3.4+     |
| 国际化   | next-intl            | 3.0+     |
| 主题切换 | next-themes          | 0.3+     |
| 图标     | lucide-react         | latest   |
| SEO      | Next.js Metadata API | built-in |
| 部署     | Vercel               | —        |

## 差异化设计方案（双主题）

### 深色主题

- 背景: `#111827` (gray-900) — 比 Brittany 的 slate 更偏中性灰
- 强调色: `#a78bfa` (violet-400) — 紫色系，区别于青绿色
- 主文字: `#f3f4f6` (gray-100)
- 次文字: `#9ca3af` (gray-400)
- 卡片: `#1f2937` (gray-800) 半透明

### 浅色主题

- 背景: `#fafafa` (zinc-50)
- 强调色: `#7c3aed` (violet-600) — 加深保证对比度
- 主文字: `#18181b` (zinc-900)
- 次文字: `#52525b` (zinc-600)
- 卡片: `#ffffff` 白色 + 阴影

## 项目结构

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # 根布局（ThemeProvider + 字体 + 全局结构）
│   │   ├── page.tsx            # 首页（所有 section 组合）
│   │   └── globals.css         # 全局样式 + Tailwind 变量
│   ├── api/                    # API 路由（如 Contact 表单）
│   ├── sitemap.ts              # 自动生成 sitemap
│   ├── robots.ts               # robots.txt
│   └── layout.tsx              # 顶层 HTML layout
├── components/
│   ├── layout/
│   │   ├── LeftPanel.tsx       # 左侧固定面板（姓名、职位、导航、社交链接、主题/语言切换）
│   │   ├── RightPanel.tsx      # 右侧滚动容器
│   │   ├── Footer.tsx          # 页脚（右侧底部）
│   │   └── MobileNav.tsx       # 移动端汉堡菜单（lg 以下显示）
│   ├── sections/
│   │   ├── About.tsx           # 关于我
│   │   ├── Experience.tsx      # 工作经历 (时间线)
│   │   ├── Projects.tsx        # 项目展示 (卡片)
│   │   ├── Skills.tsx          # 技能展示 (分类标签)
│   │   ├── Education.tsx       # 教育背景
│   │   └── Contact.tsx         # 联系方式
│   └── ui/
│       ├── ThemeToggle.tsx     # 深浅主题切换按钮
│       ├── LanguageSwitcher.tsx # 中英切换
│       ├── SectionHeading.tsx  # 统一的板块标题组件
│       ├── ProjectCard.tsx     # 项目卡片
│       ├── ExperienceItem.tsx  # 经历条目
│       └── SkillBadge.tsx      # 技能标签
├── messages/
│   ├── en.json                 # 英文翻译（含 UI 文案 + 内容数据）
│   └── zh.json                 # 中文翻译（含 UI 文案 + 内容数据）
├── lib/
│   ├── types.ts                # TypeScript 类型定义
│   └── utils.ts                # 工具函数
├── public/
│   ├── images/                 # 项目截图、头像等
│   ├── og-image.png            # OG 图片
│   └── resume.pdf              # 简历文件
├── i18n/
│   ├── config.ts               # i18n 配置（locales, defaultLocale）
│   └── request.ts              # next-intl 请求配置
├── middleware.ts               # 国际化中间件（locale 检测和重定向）
├── tailwind.config.ts          # Tailwind 配置（darkMode: 'class', 自定义主题色）
├── next.config.ts              # Next.js 配置（next-intl 插件）
├── tsconfig.json
└── package.json
```

## 实施步骤

### Phase 1: 项目基础搭建 (Day 1 上午)

1. **初始化 Next.js 项目**
   - `npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=no`
   - 安装依赖: `next-intl`, `next-themes`, `lucide-react`

2. **配置 Tailwind 双主题** — 修改 `tailwind.config.ts`
   - 设置 `darkMode: 'class'`
   - 定义自定义颜色变量（violet 强调色系）
   - 配置 Inter + Noto Sans SC 字体（中英双语字体）

3. **配置 i18n 基础结构**
   - 创建 `i18n/config.ts`（locales: ['en', 'zh']）
   - 创建 `middleware.ts`（locale 检测 + 重定向）
   - 创建 `messages/en.json` 和 `messages/zh.json` 骨架
   - 配置 `next.config.ts` 集成 next-intl 插件
   - 设置 `app/[locale]/layout.tsx` 注入 NextIntlClientProvider

4. **搭建双栏布局** — _depends on 2, 3_
   - `app/[locale]/layout.tsx`: ThemeProvider + 字体 + metadata
   - `app/[locale]/page.tsx`: 双栏容器（左固定 + 右滚动）
   - `components/layout/LeftPanel.tsx`: 左侧固定面板
     - 姓名、职位、一句话 tagline
     - 导航锚点链接（About / Skills / Experience / Projects / Education / Contact）
     - 当前 section 高亮指示器
     - 社交链接图标（GitHub, LinkedIn, Email）
     - 主题切换 + 语言切换按钮
   - `components/layout/RightPanel.tsx`: 右侧滚动内容容器
   - `components/layout/Footer.tsx`: 页脚（右侧底部）
   - `components/layout/MobileNav.tsx`: 移动端导航（lg 以下退化为顶部导航 + 单栏滚动）

### Phase 2: 内容 Section 开发 (Day 1 下午 ~ Day 2 上午)

5. **About Section** (右侧第一个 section)
   - 个人介绍段落
   - 可选：个人照片

6. **Skills Section**
   - 按类别分组：前端 / 后端 / 数据库 / DevOps / 工具
   - 使用标签式展示（SkillBadge 组件）

7. **Experience Section**
   - 时间线布局（左侧时间 + 右侧内容）
   - 公司名、职位、时间范围、职责描述、技术标签
   - ExperienceItem 组件复用

8. **Projects Section**
   - 卡片网格布局（ProjectCard 组件）
   - 项目名、描述、技术标签、链接（GitHub + Live Demo）
   - Featured 项目突出展示

9. **Education Section**
   - 学校、学位、时间、相关课程/成绩（可选）

10. **Contact Section**
    - 邮箱地址展示
    - 社交链接汇总
    - 可选：简单联系表单（后续可加）

### Phase 3: 完善与部署 (Day 2 下午)

11. **填充 i18n 内容** — _depends on 5-10_
    - 完善 `messages/en.json` 和 `messages/zh.json` 所有文案
    - 含占位符数据，用户后续替换为真实内容

12. **SEO 优化** — _depends on 3_
    - `app/[locale]/layout.tsx` 中 `generateMetadata` 动态生成 metadata
    - OG 图片配置
    - `app/sitemap.ts` 自动生成 sitemap
    - `app/robots.ts` 配置

13. **响应式适配** — _depends on 4-10_
    - 桌面端 (lg+)：左固定右滚动双栏布局
    - 平板/移动端 (<lg)：退化为顶部导航 + 单栏滚动
    - 移动端汉堡菜单

14. **部署到 Vercel**
    - 推送代码到 GitHub
    - 连接 Vercel 自动部署
    - 后续绑定自定义域名

## 验证标准

1. `npm run build` 无错误通过
2. 深色/浅色主题切换正常，无 hydration 闪烁
3. 中英文切换正常，URL 路径包含 locale（/en, /zh）
4. 所有 7 个板块在桌面端和移动端正常显示
5. 浏览器 DevTools 检查 meta 标签和 OG 标签是否正确
6. Lighthouse 评分：Performance > 90, Accessibility > 90, SEO > 90
7. Vercel 预览部署成功

## 关键决策

- **单页滚动 vs 多页**: 选择单页滚动式（类似参考站），所有板块在首页，简洁直观
- **布局**: 左固定右滚动双栏（同参考站风格），桌面端左侧 ~40% 固定展示身份信息和导航，右侧 ~60% 滚动展示内容；移动端退化为顶部导航 + 单栏
- **动效暂不实现**: 用户明确表示暂不需要，后续可用 framer-motion 加入
- **Contact 表单暂不实现**: 先展示邮箱和社交链接，后续可加表单 + API route
- **内容用 JSON 管理**: 所有内容放在 messages/ 的 i18n JSON 中统一管理，一石二鸟
- **紫色强调色差异化**: 避免与 Brittany 的青绿色撞色，紫色在深色和浅色主题下都有良好表现

## 待确认事项

1. **字体偏好**: 英文用 Inter、中文用 Noto Sans SC（思源黑体），是否满意？
2. **紫色强调色可以吗？** 如果不喜欢紫色，也可以换成琥珀色、玫红色等其他方向。
