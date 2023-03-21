import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'サプリ情報',

  origin: 'https://sapuri.page',
  basePathname: '/',
  trailingSlash: false,

  title: 'サプリページ — サプリメント・ヘルスケア・iHerb割引情報',
  description: 'サプリガイド・栄養補助食品・栄養素・ヘルスケア・美容・iHerb割引情報を提供',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'ja-jp',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('ja-jp', {
    year: 'numeric',
    month: 'narrow',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 10,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
