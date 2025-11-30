import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Meursault",
  subTitle: "Meursault Template Demo Site",
  brandTitle: "Meursault",
  description: "Demo Site",
  site: "https://meursaultsignal.netlify.app", // ← 建议加上 https://
  locale: "en",

  // ✅ 关键修改：个人信息现在放在 author 下！
  author: {
    name: "WhitePaper 白芷",
    sign: "Ad Astra Per Aspera.",
    avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
    socialLinks: [
      {
        icon: "line-md:github-loop",
        link: "https://github.com/meursault-singal",
      },
      {
        icon: "mingcute:bilibili-line",
        link: "https://space.bilibili.com/22433608",
      },
      {
        icon: "mingcute:netease-music-line",
        link: "https://music.163.com/#/user/home?id=125291648",
      },
    ],
  },

  navigators: [
    { nameKey: I18nKeys.nav_bar_home, href: "/" },
    { nameKey: I18nKeys.nav_bar_archive, href: "/archive" },
    { nameKey: I18nKeys.nav_bar_about, href: "/about" },
    { nameKey: I18nKeys.nav_bar_github, href: "https://github.com/meursault-singal" },
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    // ... 其他 banner
  ],

  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  bannerStyle: "LOOP",
};

export default YukinaConfig;



