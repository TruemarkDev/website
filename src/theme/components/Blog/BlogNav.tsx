import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Collapse, Navbar, Nav, NavItem, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

interface Category {
  category: string;
  totalCount: number;
}

interface BlogNavProps {
  selectCategory: Function;
  resetCategory: Function;
  categoryFilter: string;
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogNav: React.FC<BlogNavProps> = ({
  categoryFilter,
  searchText,
  onChange,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed((previous) => !previous);

  const data = useStaticQuery(graphql`
    query fetchCategories {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog-post" } } }
      ) {
        categories: group(field: { frontmatter: { category: SELECT } }) {
          category: fieldValue
          totalCount
        }
      }
    }
  `);

  const categoryFilterNavBarClassname = categoryFilter == 'All' ? 'active' : '';

  return (
    <Navbar expand="lg" className="cv-menu py-0 sticky-top category-nav-menu">
      <Container>
        <button
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          type="button"
          className="navbar-toggler d-flex justify-content-center align-items-center w-100 py-3 d-lg-none"
        >
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="text-secondary"
          />
        </button>
        <div className="row mt-2">
          <div className="col-lg-9 col-12">
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="me-auto ms-0 d-flex align-items-center" navbar>
                <NavItem>
                  <Link
                    to="/blog"
                    className={`nav-link ${categoryFilterNavBarClassname}`}
                  >
                    All
                  </Link>
                </NavItem>
                {data.allMarkdownRemark.categories.map(
                  ({ category, totalCount }: Category) => {
                    const categorySlag = category
                      .toLowerCase()
                      .replace(' ', '-');
                    const categoryClassName =
                      categoryFilter == category ? 'active' : '';

                    return (
                      <NavItem key={category}>
                        <Link
                          to={`/blog/${categorySlag}`}
                          className={`nav-link ${categoryClassName}`}
                        >
                          {category}
                        </Link>
                      </NavItem>
                    );
                  }
                )}
              </Nav>
            </Collapse>
          </div>

          <div className="col-12 col-lg-3  mb-0 py-md-3 pb-3">
            <div className="search-bar position-relative form-group">
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon position-absolute text-secondary"
              />
              <input
                className="form-control"
                placeholder="Searching for something ?"
                value={searchText}
                onChange={onChange}
                type="text"
              />
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default BlogNav;
