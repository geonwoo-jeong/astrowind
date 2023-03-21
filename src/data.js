import { getPermalink, getBlogPermalink, getAsset, getTagPermaLink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'サプリ',
      links: [
        {
          text: 'マルチビタミン',
          href: getTagPermaLink('multi-vitamin'),
        },
        {
          text: '抗酸化物質',
          href: getTagPermaLink('antioxidants'),
        },
        {
          text: 'マグネシウム・カルシウム・ビタミンD',
          href: getTagPermaLink('bore-health'),
        },
        {
          text: '血液循環・高血圧・高脂血症・浮腫',
          href: getTagPermaLink('circulation'),
        },
        {
          text: '胃・腸・消化・排便',
          href: getTagPermaLink('digestion'),
        },
        {
          text: '免疫力・鼻炎・アトピー・風邪',
          href: getTagPermaLink('immunity'),
        },
        {
          text: 'たんぱく質・アミノ酸・ハーブミックス',
          href: getTagPermaLink('nutrition'),
        },
        {
          text: '女性生理・更年期',
          href: getTagPermaLink('feminine-cycle'),
        },
        {
          text: '関節・軟骨・靭帯',
          href: getTagPermaLink('joints'),
        },
        {
          text: '肝臓・前立腺・糖尿病・貧血',
          href: getTagPermaLink('metabolic'),
        },
        {
          text: '脳の記憶・不眠・うつ',
          href: getTagPermaLink('mental-health'),
        },
        {
          text: '眼の健康',
          href: getTagPermaLink('vision'),
        },
      ],
    },
    {
      text: 'ニュース',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: '割引情報',
      href: getBlogPermalink(),
    }
  ],
};
  
export const footerData = {
  links: [
    // {
    //   title: 'サプリメント情報',
    //   links: [
    //     { text: 'マルチビタミン', href: '#' },
    //     { text: '抗酸化物質', href: '#' },
    //     { text: 'マグネシウム・カルシウム・ビタミンD', href: '#' },
    //     { text: '血液循環・高血圧・高脂血症・浮腫', href: '#' },
    //     { text: '胃・腸・消化・排便', href: '#' },
    //     { text: '免疫力・鼻炎・アトピー・風邪', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: ``,
};
