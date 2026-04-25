import React, { useState, useRef, useEffect } from 'react';

import { UncontrolledCollapse } from 'reactstrap';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Scrollspy } from '@makotot/ghostui';

import ButtonWithModal from '@components/Button/ButtonWithModal';

interface Heading {
  value: string;
  id: string;
  depth: number;
}

interface BlogTableOfContentProps {
  headings: Heading[];
  title: string;
}

interface TableOfContentItemsProps {
  headings: Heading[];
  currentElementIndexInViewport: number;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TableOfContentItems: React.FC<TableOfContentItemsProps> = ({
  headings,
  currentElementIndexInViewport,
  setTitle,
}) => {
  return headings.map(({ id, value, depth }, index) => {
    const paddingLeft = `${Math.max(depth - 1, 0)}em`;

    if (currentElementIndexInViewport === index) {
      setTitle(value);
    }

    const activeHeading =
      currentElementIndexInViewport === index ? 'selected-on-view' : '';

    return (
      <li key={id} className={activeHeading} style={{ paddingLeft }}>
        <Link to={`#${id}`}>{value}</Link>
      </li>
    );
  });
};

const BlogToc: React.FC<BlogTableOfContentProps> = ({
  headings,
  title: defaultTitle,
}) => {
  const [title, setTitle] = useState(defaultTitle);

  const sectionRefs = headings.map(() => useRef<HTMLHeadingElement>(null));

  const assignRefsToHeadings = () =>{
    sectionRefs.forEach((ref, index) => {
      const headingID = headings[index].id;
      const element = document.getElementById(headingID);
      if (element) {
        ref.current = element;
      }
    });
  }

  useEffect(() => {
   assignRefsToHeadings();
  }, [headings]);

  return (
    <div className="minimized-toc-container sticky-top py-3">
      <div className="container minimized-toc d-flex align-items-center justify-content-between ">
        <p className="m-0 active">
          <div className="collapse-btn" id="toggler">
            <FontAwesomeIcon icon={faCaretRight} className="me-2" />
            <span id="toc-active-title" className="text-secondary pointer">
              {title}
            </span>
          </div>
        </p>
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
            <Scrollspy sectionRefs={sectionRefs}>
              {({ currentElementIndexInViewport }) => (
                <TableOfContentItems
                  headings={headings}
                  currentElementIndexInViewport={currentElementIndexInViewport}
                  setTitle={setTitle}
                />
              )}
            </Scrollspy>
          </div>
        </UncontrolledCollapse>
      </div>
    </div>
  );
};

export default BlogToc;
