import React from 'react';

import { Blogs, RelatedPostSection } from './Blogs';
import { RELATED_POST } from '@constants/constants';

interface Frontmatter {
  description: string;
  category: string;
  tags: string[];
  slug: string;
  title: string;
  date: string;
  uid: number;
  featuredImage: {
    childImageSharp: {
      resize: {
        src: string;
        width: number;
        height: number;
      };
    };
  };
  toc: boolean;
  author: {
    id: string;
    name: string;
    avatar: {
      childImageSharp: {
        resize: {
          src: string;
          height: number;
          width: number;
        };
      };
    };
  };
}

interface Edge {
  node: {
    excerpt: string;
    frontmatter: Frontmatter;
    fields: {
      timeToRead: {
        text: string;
      };
    };
  };
}

interface BlogSectionProps {
  blogType: any;
  headerTag: string;
  heading: string;
  blogCategory: string;
  blogUID: number;
  sectionTitle: string;
  buttonText: string;
  edgeData: Edge[];
  blogs: {
    edges: Edge[];
  };
  blogRedirectRoute: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  blogType,
  headerTag,
  heading,
  blogCategory,
  blogUID,
  sectionTitle,
  buttonText,
  edgeData,
  blogs,
  blogRedirectRoute,
}) => {
  const title = sectionTitle || 'You might also like';

  if (blogType === RELATED_POST) {
    const filteredBlogs = {
      edges: blogs.edges.filter(
        (blog) =>
          blog.node.frontmatter.category === blogCategory &&
          blog.node.frontmatter.uid !== blogUID
      ),
    };

    return (
      <RelatedPostSection sectionTitle={title} blogs={filteredBlogs.edges} />
    );
  }

  return (
    <Blogs
      blogs={blogs.edges}
      headerTag={headerTag}
      heading={heading}
      buttonText={buttonText}
      edgeData={edgeData}
      blogRedirectRoute={blogRedirectRoute}
    />
  );
};

export default BlogSection;
