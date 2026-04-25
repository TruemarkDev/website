import React from 'react';
import ButtonWithModal from 'components/Button/ButtonWithModal';
const Soono = '/images/upgrade-your-application/soono-ui.png';
const Gangstabet = '/images/portfolio/Gangstabet-image.png';
const Invoicework = '/images/portfolio/Invoicework-image.png';
import ButtonWithAllProjects from 'components/Button/ButtonWithAllProjects';


const GatsbyJSProjects = () => {
    return(
        <section>
            <div className='container'>
                <div className="col-md-12">
                    <div className="header text-center">
                        <div className="header-tag">Project</div>
                            <h2>Our Top GatsbyJS Projects</h2>
                    </div>
                </div>             
            </div>
            <div className='mt-5'>
                <section className="portfolio py-0 invoiceWork">
                    <div className="portfolio-overlay h-100">
                        <div className="h-100 container">
                            <div className="justify-content-between align-items-center h-100 row">
                                <div className="col-md-7 col-lg-5">
                                    <div className="portfolio-details">
                                        <span className="badge outline me-2 badge-primary-outline">WEB</span>
                                        <h2 className="heading text-white mt-2 mb-2">Invoice Work</h2>
                                        <p className="description text-white mb-2">Invoice Work is a comprehensive platform designed to simplify time tracking, invoicing, and payment processes. It streamlines workflow by integrating time logs, generating professional invoices, and facilitating easy payments.</p>
                                        <a href="https://reduct.video/" target="_blank" className="btn btn-lg btn-primary white outlined px-0 px-md-4 mt-4 me-3" rel="noreferrer">Visit Website</a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end align-items-end showcase col-md-5 col-lg-6">
                                    <img src={Invoicework} alt="Flexonet UI" className='img-fluid w-100'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div>
                <section className="portfolio py-0 gangstabet">
                    <div className="portfolio-overlay h-100">
                        <div className="h-100 container">
                            <div className="justify-content-between align-items-center h-100 row">
                                <div className="col-md-7 col-lg-5">
                                    <div className="portfolio-details">
                                        <span className="badge outline me-2 badge-primary-outline">WEB</span>
                                        <h2 className="heading text-white mt-2 mb-2">Gangstabet</h2>
                                        <p className="description text-white mb-2">GangstaBet is a collection of 5,555 unique digital collectibles where people can participate to evolve their characters for eventual permanence on the blockchain.</p>
                                        <a href="https://mysoono.com/" target="_blank" className="btn btn-lg btn-primary white outlined px-0 px-md-4 mt-4 me-3" rel="noreferrer">Visit Website</a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end align-items-end showcase col-md-5 col-lg-6">
                                    <img src={Gangstabet} alt="Soono UI" className='img-fluid w-100'></img>
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

export default GatsbyJSProjects;