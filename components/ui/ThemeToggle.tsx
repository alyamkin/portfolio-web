'use client';

import { useSyncExternalStore } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
};

const getTheme = () =>
  (document.documentElement.dataset.theme as Theme | undefined) ?? null;

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);
  const isDark = theme === 'dark';

  const toggle = () => {
    const next: Theme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={theme ? isDark : undefined}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-10 shrink-0 cursor-pointer [:root:not([data-theme])_&]:hidden place-items-center rounded-[10px] border border-line text-ink transition-colors hover:border-ink"
    >
      <FiMoon aria-hidden="true" className="size-4.5 dark:hidden" />
      <FiSun aria-hidden="true" className="hidden size-4.5 dark:block" />
    </button>
  );
};

export default ThemeToggle;
