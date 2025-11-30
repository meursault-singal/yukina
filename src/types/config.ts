// src/types/config.ts
import type I18nKeys from "../locales/keys";

// 👇 新增 Author 接口
interface Author {
  name: string;
  sign?: string;
  avatarUrl?: string;
  socialLinks?: { icon: string; link: string }[];
}

interface Navigator {
  nameKey: I18nKeys;
  href: string;
}

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navigators: Navigator[];

  // ✅ 替换旧字段：移除 username/sign/avatarUrl/socialLinks
  author: Author; // ← 核心改动！

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: string[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP" | "STATIC" | "HIDDEN"; // 建议扩展为联合类型
}

export type { Configuration, Author };



