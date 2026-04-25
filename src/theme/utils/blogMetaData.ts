export const getBlogMetaData = (apiUrlData: any, metaDataImagePath: any) => {
  const pluginOptionsData: any = apiUrlData.edges.map(({ node }) => node);

  const pluginOptionsUrlData: any = pluginOptionsData.find(
    (item: any) => item.name === '@truemark/gatsby-theme-effortless-blog'
  );

  if (pluginOptionsUrlData) {
    const { pluginOptions: { blogPageMetaData } } = pluginOptionsUrlData;

    const blogPageMetaImagePath  = metaDataImagePath.nodes[0].childrenImageSharp[0].fixed.src

    const pageMetaData = {
      ...blogPageMetaData,
      featuredImage: { src: blogPageMetaImagePath }
    }

    return pageMetaData;
  }
}
