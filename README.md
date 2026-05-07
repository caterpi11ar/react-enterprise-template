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

**English** | [简体中文](./README.zh-CN.md)

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
