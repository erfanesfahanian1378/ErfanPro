// Facts about you that are the same in every language. Translated text (headline, bio, labels)
// lives in src/i18n/ui.ts and your CV in ./cv.ts.

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export const SITE = {
  /** Your name in Latin script, used in metadata. The displayed name per language is in src/i18n/ui.ts. */
  name: 'Erfan Esfahanian',
  initials: 'EE',
  /** Job title, used in search-engine data. */
  jobTitle: 'Software Engineer',
  email: 'es.erfan95@gmail.com',
  /**
   * Profile photo: a square image (at least 256×256) in /public. Naming the file after you
   * helps it show up in image search. Set it to '' to show your initials instead.
   */
  avatar: '/erfan-esfahanian.jpg',
};

/**
 * Codes that prove to search engines that the site is yours (the "HTML tag" method).
 * Paste only the value of content="…", for example google: 'AbC123…'. Leave '' when unused.
 * See "Get found when people search your name" in README.md.
 */
export const VERIFICATION = {
  google: '',
  bing: '',
};

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/erfanesfahanian1378', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erfan-esfahanian-84b020204', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
];

/** Main menu. Labels come from `nav` in src/i18n/ui.ts. */
export const NAV = [
  { key: 'cv', href: '/cv/' },
  { key: 'projects', href: '/projects/' },
  { key: 'blog', href: '/blog/' },
] as const;
