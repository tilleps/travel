import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/travel/",
  title: "Travel",
  description: "Collection of travel notes",
  head: [
    ['script', { async: true, defer: true, src: 'https://umami.tilleps.com/script.js', 'data-website-id': '8bf25f70-74ae-4d0e-97ba-e768903010eb' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Japan",
        link: "/japan"
      },
      /*
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
      //*/
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
