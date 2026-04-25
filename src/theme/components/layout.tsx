import React, { ReactNode } from 'react';

import { Container } from 'theme-ui';

import { setApiUrls } from '@utils/pluginData';

interface LayoutProps {
  children: ReactNode;
  pageMetaData: any;
  path: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  setApiUrls();

  return (
    <Container className="container">
      <Container className="col-md-12">
        <Container className="row blogs">{children}</Container>
      </Container>
    </Container>
  );
};

export default Layout;
