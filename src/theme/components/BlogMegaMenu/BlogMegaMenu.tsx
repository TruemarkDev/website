import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ESTIMATION } from '@constants/constants';

import EstimationBlog from '@components/BlogMegaMenu/EstimationBlogMenu';

interface categoryTypeQuery {
  data: any;
}

interface Frontmatter {
  title: string;
  category: String;
  description: String;
  slug: String;
  featuredImage: {
    childImageSharp: {
      resize: {
        src: string;
        width: number;
        height: number;
      };
    };
  };
}

interface Edge {
  node: {
    excerpt: string;
    frontmatter: Frontmatter;
  };
}

interface CategoriesBlogQuery {
  categoriesBlogQuery: {
    edges: Edge[];
  };
  allMarkdownRemark: {
    categories: any;
  };
}

interface Category {
  category: string;
}

interface BlogMegaMenuProps {
  // Astro migration: data is now fed in as props by BaseLayout. The
  // useStaticQuery fallback is retained so the original Gatsby code path still
  // works when the component is mounted without explicit data.
  blogPosts?: Edge[];
  categories?: Array<{ category: string; totalCount?: number }>;
}

const BlogMegaMenu: React.FC<BlogMegaMenuProps> = ({
  blogPosts,
  categories,
}) => {
  const [categoryValue, setCategoryValue] = React.useState<String | null>(
    ESTIMATION
  );
  const [megaMenuBlogs, setMegaMenuBlogs] = React.useState<any>([]);

  const fallback = useStaticQuery<CategoriesBlogQuery>(graphql`
    query { _stub: 1 }
  `);

  const blogs = {
    categoriesBlogQuery: {
      edges: blogPosts ?? fallback?.categoriesBlogQuery?.edges ?? [],
    },
    allMarkdownRemark: {
      categories: categories ?? fallback?.allMarkdownRemark?.categories ?? [],
    },
  };

  React.useEffect(() => {
    const tempBlogPosts: any = [];

    blogs.categoriesBlogQuery.edges.forEach((blogCat: any) => {
      if (blogCat.node.frontmatter.category === categoryValue) {
        tempBlogPosts.push(blogCat);
      }
    });

    setMegaMenuBlogs(tempBlogPosts);
  }, [categoryValue]);

  const blogCategory = [
    {
      category: ESTIMATION,
    },
    ...blogs.allMarkdownRemark.categories,
  ];

  return (
    <ul className="nav rounded-bottom p-4 mega-menu-category">
      <li className="row">
        <ul className="col-2 border-end border-primary pe-0">
          <h6>Blog categories</h6>
          {blogCategory.map(({ category }: any) => (
            <Link
              key={category}
              to={`/blog/${category.toLowerCase().replace(' ', '-')}`}
              className={`nav-text`}
              onMouseOver={(e: any) => {
                setCategoryValue(e.target.textContent);
              }}
            >
              <li
                className={`position-relative blog-category-hover`}
              >
                {category}
              </li>
            </Link>
          ))}
        </ul>
        {categoryValue == ESTIMATION ? (
          <EstimationBlog />
        ) : (
          <ul className="col-10 row">
            {megaMenuBlogs.slice(0, 5).map((blogs: any) => {
              const { title, slug, featuredImage } = blogs.node.frontmatter;

              return (
                <span key={slug} className="col-6 align-items-center">
                  <li className="m-0 col-12">
                    <Link
                      to={`/blog/${slug}/`}
                      className="nav-dropdown-item d-block mb-1 py-2 px-2"
                      activeClassName="active"
                    >
                      <span className="d-flex align-items-center mb-0">
                        <span className="col-4 blog-img-holder">
                          <img
                            src={featuredImage.childImageSharp.resize.src}
                            alt={title}
                            className="img-fluid rounded"
                          />
                        </span>
                        <span className="nav-item ps-0">
                          <span className="fw-bold nav-heading">{title}</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                </span>
              );
            })}
            <Link
              className="m-0 ms-3 col-5 view-all container d-flex justify-content-between px-4 py-2 rounded align-items-center"
              to={`/blog/${categoryValue?.toLowerCase().replace(' ', '-')}`}
            >
              <span className="nav-item ps-0">
                <span className="fw-bold nav-heading">View all</span>
                <span className="d-block nav-text">
                  other {categoryValue} blogs
                </span>
              </span>
              <span className="svg-arrow">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1002_4284)">
                    <path
                      d="M16.172 11.987L10.808 6.62298L12.222 5.20898L20 12.987L12.222 20.765L10.808 19.351L16.172 13.987H4V11.987H16.172Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_4284">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.987305)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default BlogMegaMenu;
