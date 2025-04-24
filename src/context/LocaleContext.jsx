import React, { createContext, useContext, useState } from 'react';
import translations from '../i18n/translations';

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    return keys.reduce((obj, key) => (obj && obj[key]) ? obj[key] : keyPath, translations[locale]);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);