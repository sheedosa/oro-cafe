import { useContext } from 'react';
import { LangContext } from './LanguageProvider';

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
