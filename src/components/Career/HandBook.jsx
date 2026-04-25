import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import HandBookImg from 'images/career/handbook.png?url';
const HandBook = () => (
    <section className="">
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-7 col-md-7 col-sm-12 mb-4 mb-md-0'>
                    <h1 className='h1 mb-4'>Want to know our culture and how we work</h1>
                    <p className='mb-4'>Our Handbook provides an overview of why we exist, our roles, our investment into staff welfare, our team norms, Software Development Life Cycle (SDLC) guides, and details of our processes, policies and benefits. It’s filled with things we’ve learned based on our own experience and study of others’ experiences.</p>
                    <ul className='list-unstyled ms-0'>
                        <li><FontAwesomeIcon icon={faCheck} className="me-3" />About Company</li>
                        <li><FontAwesomeIcon icon={faCheck} className="me-3" />Benefits</li>
                        <li><FontAwesomeIcon icon={faCheck} className="me-3" />Guidelines</li>
                    </ul>
                    <a href='https://handbook.truemark.dev/docs/handbook/' target="_blank" className='btn btn-lg btn-primary outlined mt-4'>
                        Check our handbook
                    </a>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12'>
                    <img className='img-fluid mt-sm-4' src={HandBookImg} alt="Truemark Handbook" />
                </div>
            </div>
        </div>
    </section>
);
export default HandBook;