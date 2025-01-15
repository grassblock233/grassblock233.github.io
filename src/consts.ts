// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh";
export const SITE_TAB = "GrassBlock";
export const SITE_TITLE = "Blog";
export const SITE_DESCRIPTION = "GrassBlock's Blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "GrassBlock233";
export const USER_SITE = "https://grassblock233.github.io"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "/profile.jpg";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  {
    id: "home",
    text: "主页",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self",
  }, // Home page
  {
    id: "about",
    text: "关于",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self",
  }, // About page
  {
    id: "blog",
    text: "文章",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部文章",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "notes",
        text: "笔记",
        href: "/blog/categories/notes",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      },
      {
        id: "others",
        text: "其它",
        href: "/blog/categories/others",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      },
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目分享",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/grassblock233",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/419213014",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];

// Share
export const socialLinks = [
  {
      name: "Bilibili",
      icon: "ri:bilibili-line",
      class: "bg-[#00aeec] hover:bg-[#0099d0]",
      url: `https://t.bilibili.com/`,
  },
]