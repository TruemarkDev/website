import React from 'react';

// Astro migration: chrome (header / footer / SEO) lives in BaseLayout.astro now.
// This component became a passthrough so existing React pages can be mounted
// as islands inside an Astro page without rendering a duplicate shell.
const Layout = ({ children, bodyClass }) => (
  <div className={bodyClass || ''}>{children}</div>
);

export default Layout;
