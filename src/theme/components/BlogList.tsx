import React from 'react';

const startup = '/images/startup.jpg';
import BlogCard from '@components/BlogCard';

import ROUTES from '@constants/constants';

interface Frontmatter {
  description: string;
  category: string;
  slug: string;
  title: string;
  date: string;
  featuredImage: {
    childImageSharp: {
      resize: {
        src: string;
        width: number;
        height: number;
      };
    };
  };
  author: {
    id: string;
    name: string;
  };
}

interface Edge {
  node: {
    frontmatter: Frontmatter;
  };
}

interface BlogListQuery {
  allMdx: {
    edges: Edge[];
  };
}

interface BlogListProps {
  categoryFilter: any;
  data: {
    edges: Edge[];
  };
}

const BlogList: React.FC<BlogListProps> = ({ categoryFilter, data }) => (
  <section className="container mt-4 mb-4">
    <ul className="row row-eq-height blogs mb-0 p-0">
      {data.edges.map(({ node: { frontmatter } }, index) => {
        const {
          slug,
          title,
          date,
          category,
          description,
          featuredImage,
          author,
        } = frontmatter;

        const blogLink = `${ROUTES.BLOG}/${slug}/#`;

        if (categoryFilter) {
          if (categoryFilter !== category) {
            return null;
          }
        }

        const imgSrc = featuredImage
          ? featuredImage.childImageSharp.resize.src
          : startup;

        return (
          <BlogCard
            key={`blog-card-${index}`}
            title={title}
            url={blogLink}
            date={date}
            category={category}
            description={description}
            imgSrc={imgSrc}
            author={author}
            className="col-lg-4 col-md-12 rm-sm-3 mb-3"
          />
        );
      })}
    </ul>
  </section>
);

export default BlogList;
