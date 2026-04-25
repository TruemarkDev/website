import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  name: string;
  pluginOptions: any;
}

interface Edge {
  node: Node;
}

interface AllSitePluginData {
  allSitePlugin: {
    edges: Edge[];
  };
}

export const setApiUrls = (): void => {
  const apiUrlData: AllSitePluginData = useStaticQuery(graphql`
    query {
      allSitePlugin {
        edges {
          node {
            name
            pluginOptions
          }
        }
      }
    }
  `);

  const pluginOptionsData: Node[] = apiUrlData.allSitePlugin.edges.map(({ node }) => node);

  const pluginOptionsUrlData: Node | undefined = pluginOptionsData.find(
    (item: Node) => item.name === '@truemark/gatsby-theme-effortless-blog'
  );

  if (pluginOptionsUrlData) {
    const { pluginOptions } = pluginOptionsUrlData;

    const contactApiUrl: string = pluginOptions.urls.CONTACT_API_INDEX_URL;

    if (typeof window !== 'undefined' && window) {
    if (contactApiUrl) {
      localStorage.setItem('contactApiUrl', contactApiUrl);
    }
  }
  }
};
