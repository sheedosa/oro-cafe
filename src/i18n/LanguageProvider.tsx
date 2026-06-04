import { createContext, useCallback, useEffect, useState, type ReactNode } from 'react';
import { strings, type Lang, type Strings } from './strings';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Strings;
  dir: 'rtl' | 'ltr';
}

export const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'oro-lang';

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    /* localStorage unavailable */
  }
  return 'ar'; // Default to Arabic.
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Keep <html lang/dir> in sync (an inline script in index.html sets the
  // initial value to avoid a flash; this keeps it correct after toggling).
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    setLangState(l);
  }, []);

  const toggle = useCallback(() => setLangState((prev) => {
    const next = prev === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
    return next;
  }), []);

  const value: LangContextValue = {
    lang,
    setLang,
    toggle,
    t: strings[lang],
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
