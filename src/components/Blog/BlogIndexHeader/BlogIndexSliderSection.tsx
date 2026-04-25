import React from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BlogCard from "../Card";
import startup from 'images/startup.jpg?url';

interface BlogIndexSliderSectionProps {
  sliderBlogPosts: any[];
}

const BlogIndexSliderSection: React.FC<BlogIndexSliderSectionProps> = ({
  sliderBlogPosts,
}) => {
  return (
    <div className="swiper-holder">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1.6}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        centerInsufficientSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 1.6,
          },
          1300: {
            slidesPerView: 1.8,
          },
        }}
      >
        {sliderBlogPosts.map((edge, index) => {
          const {
            slug,
            title,
            date,
            category,
            description,
            featuredImage,
            author,
          } = edge.node.frontmatter;

          const blogLink = `/blog/${slug}/#`;
          const imgSrc = featuredImage ? featuredImage : startup;

          return (
            <SwiperSlide key={index}>
              <BlogCard
                key={`blog-card-${index}`}
                title={title}
                url={blogLink}
                date={date}
                category={category}
                description={description}
                featuredImage={imgSrc}
                imgSrc={imgSrc}
                author={author}
                className="col-lg-12 col-md-12 rm-sm-3 p-2 swiper-content"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlogIndexSliderSection;
