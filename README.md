# react-vite-template

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/pnpm-enforced-F69220?logo=pnpm&logoColor=white" alt="pnpm" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT" />
  <img src="https://img.shields.io/github/stars/caterpi11ar/react-vite-template?style=social" alt="stars" />
</p>

English | [简体中文](#简体中文)

An opinionated React + Vite template for building production-grade SPAs. Use the **Use this template** button on GitHub to spin up a new repo in one click.

## Features

- [x] **React 19** with the React Compiler enabled out of the box
- [x] **Vite 8** (rolldown) with path aliases via `tsconfigPaths`
- [x] **TypeScript** strict configuration
- [x] **TanStack Router** — file-based routing with code-splitting and devtools
- [x] **TanStack Query** — co-located `QueryClient` with 401 redirect handling and Axios error awareness
- [x] **Tailwind CSS v4** via the official Vite plugin (CSS-first config, no `tailwind.config.js`)
- [x] **Zustand** for lightweight client state
- [x] **React Hook Form + Zod** for typed forms and validation
- [x] **Clerk** authentication primitives wired in
- [x] **Recharts** for data visualization
- [x] **Axios** as the HTTP client
- [x] **Typed env** via `src/lib/env.ts` (fails fast on missing keys)
- [x] **ESLint** using `@antfu/eslint-config`
- [x] **Husky + lint-staged + commitlint** (Conventional Commits)
- [x] **pnpm-only** toolchain (enforced via `preinstall`)
- [x] **react-scan** for render diagnostics in development

## Quick Start

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Run ESLint with `--fix` |

## Project Structure

```
src/
  components/   # Shared UI components
  hooks/        # Custom hooks
  lib/          # env, router, initialize pipeline
  providers/    # App-level providers (Query, Router)
  routes/       # TanStack Router file-based routes
  styles/       # Tailwind entry
```

## License

MIT

---

<a id="简体中文"></a>

## 简体中文

基于 React + Vite 的生产级单页应用模板。点击 GitHub 仓库右上角的 **Use this template** 即可一键创建新项目。

### 能力清单

- [x] **React 19** 内置 React Compiler
- [x] **Vite 8**（rolldown）搭配 `tsconfigPaths` 路径别名
- [x] **TypeScript** 严格模式
- [x] **TanStack Router** —— 文件路由、自动代码分割、devtools
- [x] **TanStack Query** —— `QueryClient` 内联在 Provider 中，自带 401 重定向与 Axios 错误识别
- [x] **Tailwind CSS v4** 通过官方 Vite 插件集成（CSS 优先，无需 `tailwind.config.js`）
- [x] **Zustand** 轻量客户端状态
- [x] **React Hook Form + Zod** 类型安全表单与校验
- [x] **Clerk** 身份认证接入
- [x] **Recharts** 数据可视化
- [x] **Axios** HTTP 客户端
- [x] **类型化环境变量** —— `src/lib/env.ts` 缺失即报错
- [x] **ESLint** 使用 `@antfu/eslint-config`
- [x] **Husky + lint-staged + commitlint**（Conventional Commits）
- [x] **仅 pnpm**（`preinstall` 强制约束）
- [x] **react-scan** 开发环境渲染诊断

### 快速开始

```bash
pnpm install
pnpm dev
```

### 脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 类型检查并打包生产产物 |
| `pnpm preview` | 本地预览生产构建 |
| `pnpm format` | 运行 ESLint `--fix` |

### 目录结构

```
src/
  components/   # 公共组件
  hooks/        # 自定义 hooks
  lib/          # env、router、初始化管线
  providers/    # 应用级 Provider（Query、Router）
  routes/       # TanStack Router 文件路由
  styles/       # Tailwind 入口
```

### 许可证

MIT
