import React from 'react';
import BlogIndexSliderSection from '@components/BlogIndexHeader/BlogIndexSliderSection';
import BlogIndexSubscribe from '@components/BlogIndexHeader/BlogIndexSubscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Frontmatter {
  description: string;
  category: string;
  tags: string[];
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
    excerpt: string;
    frontmatter: Frontmatter;
  };
}

interface BlogIndexHeaderProps {
  sliderPosts: {
    edges: Edge[];
  };
  blogIndexHeading: string;
  blogIndexDescription: string;
  blogIndexButtonText: string;
}

const BlogIndexHeader: React.FC<BlogIndexHeaderProps> = ({
  sliderPosts,
  blogIndexHeading,
  blogIndexDescription,
  blogIndexButtonText,
}) => {
  return (
    <div className="blog-index-header overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-sm-12 d-flex justify-content-center align-items-center">
            <BlogIndexSubscribe
              blogIndexHeading={blogIndexHeading}
              blogIndexDescription={blogIndexDescription}
              blogIndexButtonText={blogIndexButtonText}
            />
          </div>
          <div className="col-xl-7 col-sm-12 blog-index-slider mt-xl-0 mt-2 p-2">
            <BlogIndexSliderSection sliderBlogPosts={sliderPosts.edges} />
          </div>
          <div className="my-xl-4 d-flex position-relative justify-content-end slider-arrow">
            <div className="swiper-prev d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="swiper-next d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default BlogIndexHeader;
