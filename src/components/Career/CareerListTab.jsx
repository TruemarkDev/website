import React, { useState } from 'react';
import { Col } from 'reactstrap';

import SelectedPosition from './SelectedPosition';

export default ({ positions }) => {
  const [selectedPosition, selectPosition] = useState();

  const renderData = positions.find((edge) => edge.node.frontmatter.uid == selectedPosition)
    || positions[0];

  const positionMenu = positions.map((edge, index) => {
    const {
      slug, title, vacancyCount, uid,
    } = edge.node.frontmatter;
    return (
      <li key={`link-${slug}`}>
        <a
          href={`/jobs/${slug}`}
          className={renderData.node.frontmatter.uid == uid ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            selectPosition(uid);
          }}
        >
          <div className="card bg-light-black p-3">
            <div className="media-content">
              <p className="m-0">{`${title} (${vacancyCount})`}</p>
            </div>
          </div>
        </a>
      </li>
    );
  });

  return (
    <Col md={12}>
      <div className="row mt-5">
        <div className="col-md-4">
          <ul className="list-unstyled ms-0 p-0 openings">
            <li>
              <small className="text-uppercase text-muted bold">
                Showing all openings
              </small>
            </li>
            {positionMenu}
          </ul>
        </div>
        <SelectedPosition
          data={renderData.node}
          selectedPositionId={selectPosition}
        />
      </div>
    </Col>
  );
};
