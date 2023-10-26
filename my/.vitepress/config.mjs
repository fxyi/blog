import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/dist/',
  outDir: '../dist',
  title: "笔记",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "数据库", link: "/docs/数据库" },
    ],

    sidebar: [
      {
        text: "数据库",
        link: "/docs/数据库",
        // items: [
        // { text: '数据库', link: '/docs/数据库' },
        // { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/fxyi/blog" }],
  },
});
