import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import projects from 'constants/portfolioItems/data';
import { projectImages } from 'components/Portfolio/ProjectImages';

const PortfolioItemModal = ({ isOpen, toggle, title }) => {
  const index = projects.findIndex((item) => item.name === title);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(index);
  const [currentProject, setCurrentProject] = useState(null);

  const sliderScrollRef = useRef();

  useEffect(() => {
    setCurrentProject(projects[currentProjectIndex]);
    setCurrentImage(0);
  }, [currentProjectIndex]);

  const project = currentProject
    ? currentProject
    : projects.find((x) => x.name === title);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImage]);

  const handleKeyDown = (event) => {
    if (project.images.length === 1) return;

    if (event.keyCode === 37 && currentImage > 0) {
      setCurrentImage(currentImage - 1);
      sliderScrollRef.current.childNodes[currentImage - 1].scrollIntoView({
        behavior: 'smooth',
      });
    } else if (event.keyCode === 37 && currentImage <= 0) {
      setCurrentImage(project.images.length - 1);
      sliderScrollRef.current.childNodes[
        project.images.length - 1
      ].scrollIntoView({ behavior: 'smooth' });
    } else if (
      event.keyCode === 39 &&
      currentImage < project.images.length - 1
    ) {
      setCurrentImage(currentImage + 1);
      sliderScrollRef.current.childNodes[currentImage + 1].scrollIntoView({
        behavior: 'smooth',
      });
    } else if (
      event.keyCode === 39 &&
      currentImage >= project.images.length - 1
    ) {
      setCurrentImage(0);
      sliderScrollRef.current.childNodes[0].scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handlePrevClick = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    } else if (currentProjectIndex <= 0) {
      setCurrentProjectIndex(projects.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentProjectIndex < projects.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    } else if (currentProjectIndex >= projects.length - 1) {
      setCurrentProjectIndex(0);
    }
  };

  const handleSliderLeftBtn = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else if (currentImage <= 0) {
      setCurrentImage(project.images.length - 1);
    }
    sliderScrollRef.current.childNodes[
      currentImage > 0 ? currentImage - 1 : project.images.length - 1
    ].scrollIntoView({ behavior: 'smooth' });
  };

  const handleSliderRightBtn = () => {
    if (currentImage < project.images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else if (currentImage >= project.images.length - 1) {
      setCurrentImage(0);
    }
    sliderScrollRef.current.childNodes[
      currentImage < project.images.length - 1 ? currentImage + 1 : 0
    ].scrollIntoView({ behavior: 'smooth' });
  };

  const [openAcc, setOpenAcc] = useState('1');

  const toggleAcc = (id) => {
    setOpenAcc(openAcc === id ? '' : id);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      backdrop
      backdropClassName="fade"
      className="modal-fullscreen h-100"
    >
      <div className="bg-white">
        <div className="modal-header py-3 px-4 justify-content-end border-bottom">
          <button
            onClick={toggle}
            type="button"
            className="btn-close btn-primary py-2 px-3 m-0 opacity-100"
            data-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="row px-2 px-md-4 pt-3 m-1 m-sm-0">
          <div className="col-sm-12 col-md-8">
            <div className="slider-container">
              <div className="image-container position-relative">
                <img
                  className="img-fluid rounded border"
                  src={projectImages[project.images[currentImage].src]}
                />
                <div>
                  <button
                    className="btn btn-sm outlined px-3 py-2 left-btn rounded-circle position-absolute "
                    onClick={handleSliderLeftBtn}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-sm outlined px-3 py-2 right-btn rounded-circle position-absolute"
                    onClick={handleSliderRightBtn}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
              <div className="d-flex py-4 align-items-center text-center">
                <div
                  className="d-flex justify-content-start overflow-auto w-100 gap-3"
                  ref={sliderScrollRef}
                >
                  {project.images.map((image, i) => (
                    <div
                      key={i}
                      className={`px-0 pointer ${
                        i === currentImage ? 'portfolio-thumbnail-border' : ''
                      }`}
                      onClick={() => setCurrentImage(i)}
                    >
                      <div className="img-holder m-auto">
                        <img
                          className="img-fluid rounded"
                          src={projectImages[image.src]}
                          alt={`project ${title} image preview ${i + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-start col-sm-12 col-md-4 d-flex flex-column">
            <div className="project-details-info">
              {project.images[currentImage].desc ? (
                <Accordion open={openAcc} toggle={toggleAcc}>
                  <AccordionItem>
                    <AccordionHeader className="px-2 rounded-1" targetId="1">
                      <p className="m-0 fs-2">{project.name}</p>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      {project.description}
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div>
                  <h1 className="fs-2">{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              )}
              {project.images[currentImage].desc && (
                <p className="bg-light p-2 rounded-2">
                  {project.images[currentImage].desc}
                </p>
              )}
            </div>
            <div className="py-4">
              <button
                type="button"
                className="btn btn-primary prev-btn d-block d-sm-none align-content-center w-100"
                onClick={handlePrevClick}
              >
                Previous Project
              </button>
              <button
                type="button"
                className="btn btn-primary d-block d-sm-none w-100"
                onClick={handleNextClick}
              >
                Next Project
              </button>
              <div className="d-none d-sm-flex justify-content-between gap-2">
                <button
                  type="button"
                  className="btn btn-primary prev-btn"
                  onClick={handlePrevClick}
                >
                  Previous Project
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextClick}
                >
                  Next Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioItemModal;
