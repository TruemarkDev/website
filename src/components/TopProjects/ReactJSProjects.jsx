import React from 'react';
import ButtonWithModal from 'components/Button/ButtonWithModal';
import ButtonWithAllProjects from 'components/Button/ButtonWithAllProjects';
import Flexonet from 'images/upgrade-your-application/flexonet-ui.png?url';
import Soono from 'images/upgrade-your-application/soono-ui.png?url';
import ReductVideo from 'images/portfolio/reduct-video.png?url';

const ReactJSProjects = () => {
    return(
        <section>
            <div className='container'>
                <div className="col-md-12">
                    <div className="header text-center">
                        <div className="header-tag">Project</div>
                            <h2>Our Top ReactJS Projects</h2>
                    </div>
                </div>             
            </div>
            <div className='mt-5'>
                <section className="portfolio py-0 reduct-video">
                    <div className="portfolio-overlay h-100">
                        <div className="h-100 container">
                            <div className="justify-content-between align-items-center h-100 row">
                                <div className="col-md-7 col-lg-5">
                                    <div className="portfolio-details">
                                        <span className="badge outline me-2 badge-primary-outline">WEB</span>
                                        <h2 className="heading text-white mt-2 mb-2">Reduct.Video</h2>
                                        <p className="description text-white mb-2">A platform to increase the human capacity to engage with, understand, and amplify different voices.</p>
                                        <a href="https://reduct.video/" target="_blank" className="btn btn-lg btn-primary white outlined px-0 px-md-4 mt-4 me-3" rel="noreferrer">Visit Website</a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end align-items-end showcase col-md-5 col-lg-6">
                                    <img src={ReductVideo} alt="Flexonet UI" className='img-fluid w-100'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div>
                <section className="portfolio py-0 soono">
                    <div className="portfolio-overlay h-100">
                        <div className="h-100 container">
                            <div className="justify-content-between align-items-center h-100 row">
                                <div className="col-md-7 col-lg-5">
                                    <div className="portfolio-details">
                                        <span className="badge outline me-2 badge-primary-outline">WEB</span>
                                        <h2 className="heading text-white mt-2 mb-2">Soono</h2>
                                        <p className="description text-white mb-2">A platform to take control of your customer experience and to grow your business with real-time data. Change the negative experience to positive one with Soono.</p>
                                        <a href="https://mysoono.com/" target="_blank" className="btn btn-lg btn-primary white outlined px-0 px-md-4 mt-4 me-3" rel="noreferrer">Visit Website</a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end align-items-end showcase col-md-5 col-lg-6">
                                    <img src={Soono} alt="Soono UI" className='img-fluid w-100'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <ButtonWithAllProjects />
            </div>    
        </section>
    );
};

export default ReactJSProjects;