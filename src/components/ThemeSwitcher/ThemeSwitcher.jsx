import React, { useCallback, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import ThemeSwitchers from 'components/Menu/ThemeSwitcher/ThemeSwitcher';

const ThemeSwitcher = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          defaultTheme
        }
      }
    }
  `);

  const getDefaultTheme = useCallback(() => {
    let defaultTheme = null;

    if (typeof window !== 'undefined')
      defaultTheme = window.localStorage.getItem('theme');

    return defaultTheme || data.site.siteMetadata.defaultTheme;
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
