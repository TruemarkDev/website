import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';

import ThemeSwitchers from 'components/Menu/ThemeSwitcher/ThemeSwitcher';
import { siteMetadata } from 'src/lib/site-metadata';

const ThemeSwitcher = () => {
  const getDefaultTheme = useCallback(() => {
    let defaultTheme = null;

    if (typeof window !== 'undefined')
      defaultTheme = window.localStorage.getItem('theme');

    return defaultTheme || siteMetadata.defaultTheme;
  }, []);

  const [theme, changeTheme] = useState(getDefaultTheme());

  const onChangeTheme = () => {
    const alternateTheme = theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined')
      window.localStorage.setItem('theme', alternateTheme);

    changeTheme(alternateTheme);
  };

  return (
    <>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <ThemeSwitchers theme={theme} onChange={onChangeTheme} />
    </>
  );
};

export default ThemeSwitcher;
