import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [

    /**
     * Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
     * @see {@link https://tanstack.com/router/latest/docs/installation/with-vite}
     */
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),

    /**
     * @see {@link https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#react-compiler}
     * 为什么需要单独的 @rolldown/plugin-babel
     * @vitejs/plugin-react v6 改变了架构，React Compiler 不再通过 react({ babel: { plugins: [...] } }) 的方式内联配置
     * 而是通过：reactCompilerPreset 辅助函数配合独立的 @rolldown/plugin-babel 插件使用
     */
    babel({
      presets: [reactCompilerPreset()],
    }),

    tailwindcss(),
  ],
})
