import React from 'react';

const IconUnderstanding = '/images/ui-ux/icon-understanding.svg';
const IconResearch = '/images/ui-ux/icon-research.svg';
const IconInformation = '/images/ui-ux/icon-information.svg';
const IconDevelop = '/images/ui-ux/icon-develop.svg';
const IconMockups = '/images/ui-ux/icon-mockups.svg';
const IconWireframes = '/images/ui-ux/icon-wireframes.svg';
const UIUXDesignProcess = () => (
    <section className="ui-ux-process position-relative overflow-hidden">
        <div className="container">
            <div className="header text-center mb-5 pb-2">
                <div className="header-tag text-uppercase">
                    We trust the process
                </div>
                <h2 className='mb-4'>Our UI/UX design process</h2>
            </div>
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-understanding h-100 p-4 position-relative">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconUnderstanding} alt="" />
                            </span>
                            <h4 className="m-0">Understanding</h4>
                        </div>
                        <p>Business objectives & challenges Technology & functionality Competitive analysis </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-research h-100 p-4 position-relative">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconResearch} alt="" />
                            </span>
                            <h4 className="m-0">Research</h4>
                        </div>
                        <p>UX reviews Metrics & analytics Ethnographic research User testing</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-architecture h-100 p-4 position-relative">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconInformation} alt="" />
                            </span>
                            <h4 className="m-0">Information Architecture</h4>
                        </div>
                        <p>User stories Content grouping and hierarchies System/process flow charts Ideation & strategy</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-develop h-100 p-4 position-relative">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconDevelop} alt="" />
                            </span>
                            <h4 className="m-0">Hand Over</h4>
                        </div>
                        <p>Delivery Finalize UX deliverables Style guide & functional specs Suggestions/next steps</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-mockups h-100 p-4 position-relative">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconMockups} alt="" />
                            </span>
                            <h4 className="m-0">Mockups</h4>
                        </div>
                        <p>Brand identity integration High-fidelity mockups Prototypes</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
                    <div className="rounded process process-wireframes h-100 p-4">
                        <div className="d-flex flex-wrap align-items-center mb-4 text-center">
                            <span className="icon rounded-circle me-2 p-1 d-flex">
                                <img className='img-fluid m-auto' src={IconWireframes} alt="" />
                            </span>
                            <h4 className="m-0">Wireframes</h4>
                        </div>
                        <p>Wireframes Rapid concept sketching Funciontality exploration Prototypes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default UIUXDesignProcess;
