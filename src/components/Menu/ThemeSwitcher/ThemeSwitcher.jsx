import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const darkModeOff = '/images/layout/dark-mode-off.svg';
const lightModeOff = '/images/layout/light-off.svg';
const ThemeSwitcher = ({ theme, onChange = () => {} }) => {
  const isDarkMode = theme === 'dark';

  const toggleRef = useRef(null);
  const lightModeOffRef = useRef(null);
  const darkModeOffRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      toggleRef.current.checked = true;
      toggleRef.current.classList.replace('light', 'dark');

      lightModeOffRef.current.classList.replace('d-none', 'light-mode-off');
      darkModeOffRef.current.classList.replace('dark-mode-off', 'd-none');
    } else {
      toggleRef.current.checked = false;
      toggleRef.current.classList.replace('dark', 'light');

      lightModeOffRef.current.classList.replace('light-mode-off', 'd-none');
      darkModeOffRef.current.classList.replace('d-none', 'dark-mode-off');
    }
  }, [theme]);

  return (
    <div className="theme-switcher-container d-flex align-items-center">
      <div className="form-check form-switch toggle-button position-relative">
        <input
          ref={toggleRef}
          className={`form-check-input toggle-input bg-light-black light`}
          type="checkbox"
          id="switchtheme"
          data-onstyle="warning"
          checked={isDarkMode}
          onChange={onChange}
        />
        <img
          ref={darkModeOffRef}
          src={darkModeOff}
          alt="dark mode"
          className="dark-mode-off position-absolute"
        />
        <img
          ref={lightModeOffRef}
          src={lightModeOff}
          alt="light mode"
          className="d-none position-absolute"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;

ThemeSwitcher.propTypes = {
  onChange: PropTypes.func,

  /**
   * Value of toogle component
   */
  value: PropTypes.bool,
};
