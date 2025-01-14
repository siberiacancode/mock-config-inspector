'use client';

import React from 'react';

import { LOCAL_STORAGE_KEYS, SCHEME } from '@/utils/constants';

import { SchemeContext } from './SchemeContext';

export interface SchemeProviderProps {
  children: React.ReactNode;
  defaultScheme: Scheme;
}

const MEDIA = '(prefers-color-scheme: dark)';

export const SchemeProvider = ({ children, defaultScheme }: SchemeProviderProps) => {
  const [scheme, setScheme] = React.useState<Scheme>(defaultScheme);

  const handleMediaQuery = () => {
    const isDark = window.matchMedia(MEDIA).matches;
    const systemScheme = isDark ? SCHEME.dark : 'light';
    return systemScheme;
  };

  const switchScheme = (newScheme: Scheme) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SCHEME, newScheme);
    setScheme(newScheme);
    document.documentElement.className = newScheme === 'system' ? handleMediaQuery() : newScheme;
  };

  React.useLayoutEffect(() => {
    switchScheme(defaultScheme);
  }, []);

  React.useLayoutEffect(() => {
    if (scheme !== 'system') return;
    const media = window.matchMedia(MEDIA);

    media.addEventListener('change', () => switchScheme('system'));
    return () => media.removeEventListener('change', () => switchScheme('system'));
  }, [scheme]);

  const value = React.useMemo(
    () => ({
      scheme,
      toggleScheme: switchScheme
    }),
    [scheme]
  );

  return <SchemeContext.Provider value={value}>{children}</SchemeContext.Provider>;
};
