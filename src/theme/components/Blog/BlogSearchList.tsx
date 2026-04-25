import React from 'react';

import BlogList from '@components/BlogList';
const emptyResultImage = '/images/layout/empty.svg';

interface EmptySearchResultProps {
  searchText: string;
}

const EmptySearchResult: React.FC<EmptySearchResultProps> = ({
  searchText,
}) => (
  <div className="container">
    <div className="row justify-content-center text-center py-5">
      <img
        src={emptyResultImage}
        alt="no result found"
        className="img-fluid w-25"
      />
      <div>
        No result found for:
        <div>
          <b>"{searchText}"</b>
        </div>
      </div>
    </div>
  </div>
);

interface BlogSearchListProps {
  searchText: string;
  blogs?: { edges: any[] };
}

const BlogSearchList: React.FC<BlogSearchListProps> = ({
  searchText,
  blogs = { edges: [] },
}) => {
  if (!searchText?.trim?.()) {
    return null;
  }

  const displayBlogs = blogs.edges.filter(({ node }) =>
    node.frontmatter.title.toLowerCase().includes(searchText?.toLowerCase().trim?.())
  );

  if (displayBlogs.length === 0) {
    return <EmptySearchResult searchText={searchText} />;
  }

  return <BlogList data={{ edges: displayBlogs }} />;
};

export default BlogSearchList;
