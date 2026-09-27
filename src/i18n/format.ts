import type { Locale } from './config';

const MONTHS: Record<Locale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  it: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  fa: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
};

const PRESENT: Record<Locale, string> = { en: 'Present', it: 'presente', fa: 'اکنون' };

/** Persian pages use Persian digits (۲۰۲۶); the others keep 2026. */
export function digits(text: string, locale: Locale): string {
  return locale === 'fa' ? text.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]) : text;
}

/** "2025-07" → "Jul 2025" / "lug 2025" / "ژوئیه ۲۰۲۵"; "present" → "Present". */
export function monthYear(value: string, locale: Locale): string {
  if (value === 'present') return PRESENT[locale];
  const [year, month] = value.split('-').map(Number);
  return digits(`${MONTHS[locale][month - 1]} ${year}`, locale);
}

export const dateRange = (start: string, end: string, locale: Locale) =>
  `${monthYear(start, locale)} – ${monthYear(end, locale)}`;

/** "26 Sep 2026". Dates from frontmatter are UTC midnight, so read them in UTC. */
export function formatDate(date: Date, locale: Locale): string {
  return digits(`${date.getUTCDate()} ${MONTHS[locale][date.getUTCMonth()]} ${date.getUTCFullYear()}`, locale);
}
