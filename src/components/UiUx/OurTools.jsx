import React from 'react';
const LogoFigma = '/images/ui-ux/logo-figma.svg';
const LogoInvision = '/images/ui-ux/logo-invision.svg';
const LogoSketch = '/images/ui-ux/logo-sketch.svg';
const LogoAi = '/images/ui-ux/logo-ai.svg';
const LogoPhotoshop = '/images/ui-ux/logo-photoshop.svg';
const LogoTrello = '/images/ui-ux/logo-trello.svg';
const LogoSlack = '/images/ui-ux/logo-slack.svg';
const LogoTracker = '/images/ui-ux/logo-toptracker.svg';
    const OurTools = () => (
        <section className="our-tools">
            <div className='Container'>
                <div className="header text-center mb-5">
                    <div className="header-tag text-uppercase">
                        Tools
                    </div>
                    <h2 className='mb-4'>Our favorite tools for UI/UX and project management</h2>
                    <p>Using these proven design tools, we make sure our clients receive the  result they expect within the set timeframe.</p>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-4">
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoFigma} alt="Figma" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoInvision} alt="Invision" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoSketch} alt="Sketch" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoAi} alt="Adobe illustrator" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoPhotoshop} alt="Photoshop" />
                    </span>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-4">
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoTrello} alt="Trello" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoSlack} alt="Slack" />
                    </span>
                    <span className='d-flex flex-column align-items-center tools-logo p-2 rounded'>
                        <img className='img-fluid m-auto' src={LogoTracker} alt="Time Tracker" />
                    </span>
                </div>
            </div>
        </section>
    );
export default OurTools;