import HubspotApi from '@services/api/HubspotApi';
import notyService from '@services/notyService';
import Tracker from '@services/tracker';
import { composeValidators, isEmail, required } from '@utils/formValidators';
import React, { useState } from 'react';

interface BlogIndexSubscribe {
blogIndexHeading: string
blogIndexDescription: string
blogIndexButtonText: string
}

interface Button {
  blogIndexButtonText: string
}

const Button: React.FC<Button> = ({blogIndexButtonText}) => {
  const [inputEmail, setInputEmail] = useState('');

  const sendContactMessage = (inputEmail: string) => {
    const isInvalidEmail = isEmail(inputEmail);

    if (isInvalidEmail) return ;

    const email = inputEmail;

    const contactData = {
      contact: {
        email,
      },
    };

    notyService.processInit();

    HubspotApi.post(contactData).then(
      () => {
        notyService.processSuccess();
      },
      () => {
        notyService.processFailed();
      }
    );
  };

  return (
    <div className="search_box">
      <input
        type="email"
        className="input"
        placeholder="Your Email Address"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary d-flex justify-content-center align-content-center"
        onClick={() => {
          Tracker.trackSubmitContactForm;
          sendContactMessage(inputEmail);
        }}
      >
        <p>{blogIndexButtonText}</p>
      </button>
    </div>
  );
};

const BlogIndexSubscribe: React.FC<BlogIndexSubscribe> = ({blogIndexHeading, blogIndexDescription, blogIndexButtonText}) => (
  <div className=" blog-header d-flex flex-column justify-content-start align-items-start mb-3">
    <h1 className="mb-0 heading">{blogIndexHeading}</h1>
    <p className="description mb-0 mt-3">
      {blogIndexDescription}
    </p>
    <Button blogIndexButtonText={blogIndexButtonText}/>
  </div>
);

export default BlogIndexSubscribe;
