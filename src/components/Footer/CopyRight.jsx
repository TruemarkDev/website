import React from "react";

import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";

const allRightReservedText = `2017 - ${new Date().getFullYear()} Truemark - Custom Software Development & Engineering Services. All Rights Reserved.`;

const CopyRight = ({ changeTheme, theme }) => (
  <div className="col-md-12 pt-4">
    <ul
      className="nav nav-pills text-white flip-content-sm contact-bar  d-flex justify-content-start align-items-flex-start
 ms-0"
    >
      <li className="nav-item ms-0 mb-2 md-md-0">
        &#169; {allRightReservedText}
      </li>
      <li className="nav-item">
        <a href="/terms/">Terms</a>
      </li>
      <li className="nav-item d-block ms-0 ms-md-auto mt-2 mt-md-0">
        <ThemeSwitcher />
      </li>
    </ul>
  </div>
);

export default CopyRight;
