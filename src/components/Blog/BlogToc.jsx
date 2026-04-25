import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCollapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ScrollSpy from 'react-scrollspy';
import { Link } from 'gatsby';

import ButtonWithModal from '../../theme/components/Button/ButtonWithModal';

const BlogToc = ({ headings = [], title: defaultTitle = '' }) => {
  const [title, setTitle] = useState(defaultTitle);
  const onUpdate = (el) => {
    if (el) {
      const active = headings.find(({ id }) => id === el.id);
      if (active) setTitle(active.value);
    }
  };

  const items = headings.map(({ value }) => value);

  const tocItems = headings.map(({ id, value, depth }) => {
    const paddingLeft = `${Math.max(depth - 1, 0)}em`;

    return (
      <li
        key={id}
        className={`${title === value ? 'selected-on-view' : ''}`}
        style={{ paddingLeft }}
      >
        <Link to={`#${id}`}>{value}</Link>
      </li>
    );
  });

  return (
    <div className="minimized-toc-container sticky-top py-3">
      <div className="container minimized-toc d-flex align-items-center justify-content-between ">
        <div className="m-0 active">
          <div className="collapse-btn" id="toggler">
            <FontAwesomeIcon icon={faCaretRight} className="me-2" />
            <span id="toc-active-title" className="text-secondary pointer">
              {title}
            </span>
          </div>
        </div>
        <ButtonWithModal
          modalType="subscribe"
          className="py-2 shadow-sm mb-0 d-none d-md-block"
        >
          Subscribe
        </ButtonWithModal>
      </div>
      <div className="container minimized-toc d-flex align-items-center justify-content-between ">
        <UncontrolledCollapse toggler="#toggler" className="mt-4">
          <div className="toc-list">
            <ScrollSpy items={items} onUpdate={onUpdate}>
              {tocItems}
            </ScrollSpy>
          </div>
        </UncontrolledCollapse>
      </div>
    </div>
  );
};

BlogToc.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      depth: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};

export default BlogToc;
