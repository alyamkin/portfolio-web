export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

export const themeInitScript = `(() => {
  const key = '${THEME_STORAGE_KEY}';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = () => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const apply = () => {
    const theme = saved();
    document.documentElement.dataset.theme =
      theme === 'light' || theme === 'dark' ? theme : media.matches ? 'dark' : 'light';
  };
  apply();
  media.addEventListener('change', () => { if (!saved()) apply(); });
})();`;
