// Everything that describes *you* lives here and in ./cv.ts.
// Edit these values and the whole site updates.

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'rss';
  /** Shown next to the icon on the contact section, e.g. a username. */
  handle: string;
}

export const SITE = {
  name: 'Erfan Esfahanian',
  initials: 'EE',
  /** Default <title> for pages that don't set their own. */
  title: 'Erfan Esfahanian · Software Engineer & Full-stack Developer',
  description:
    'Erfan Esfahanian is a software engineer and full-stack developer in Milan working across TypeScript/Node, Go, Python and PHP back ends, React front ends, integrations and automation.',
  /** Job title, used in search-engine data. */
  role: 'Software Engineer',
  /** Shown under your name on the home page and the CV. */
  headline: 'Software Engineer · Full-stack Developer',
  location: 'Milan, Italy',
  current: 'Software Engineer at MotorK',
  email: 'es.erfan95@gmail.com',
  /**
   * Profile photo: a square image (at least 256×256) in /public.
   * Set it to '' to show your initials instead.
   */
  avatar: '/avatar.jpg',
};

export const SOCIALS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/erfanesfahanian1378',
    icon: 'github',
    handle: 'erfanesfahanian1378',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/erfan-esfahanian-84b020204',
    icon: 'linkedin',
    handle: 'in/erfan-esfahanian',
  },
  {
    label: 'Email',
    href: `mailto:${SITE.email}`,
    icon: 'mail',
    handle: SITE.email,
  },
];

export const NAV = [
  { href: '/cv/', label: 'CV' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
];
