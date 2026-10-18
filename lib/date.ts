const monthYear = new Intl.DateTimeFormat('en-CA', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatIsoDate(iso: string): string {
  const [year, month] = iso.split('-').map(Number);

  if (!month) return String(year);

  return monthYear.format(new Date(Date.UTC(year, month - 1)));
}
