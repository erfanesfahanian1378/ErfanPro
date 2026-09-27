// Languages of the site. English lives at the root (/cv/), the others under a prefix (/it/cv/, /fa/cv/).

export const LOCALES = ['en', 'it', 'fa'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, { label: string; short: string; dir: 'ltr' | 'rtl'; ogLocale: string }> = {
  en: { label: 'English', short: 'EN', dir: 'ltr', ogLocale: 'en_GB' },
  it: { label: 'Italiano', short: 'IT', dir: 'ltr', ogLocale: 'it_IT' },
  fa: { label: 'فارسی', short: 'FA', dir: 'rtl', ogLocale: 'fa_IR' },
};

/** A piece of text in every language. */
export type Localized = Record<Locale, string>;

/** Text that is either the same in every language or translated per language (missing ones fall back to English). */
export type MaybeLocalized = string | ({ en: string } & Partial<Record<Locale, string>>);

export function pick(value: MaybeLocalized, locale: Locale): string {
  return typeof value === 'string' ? value : (value[locale] ?? value.en);
}

/** "/cv/" → "/it/cv/" for Italian, unchanged for English. */
export function localizePath(path: string, locale: Locale): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/** "/it/cv/" → "/cv/". */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(it|fa)(\/.*)?$/);
  return match ? (match[2] ?? '/') : pathname;
}

/** getStaticPaths() entries that render a page once per language. */
export function localeStaticPaths() {
  return LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? undefined : locale },
    props: { locale },
  }));
}
