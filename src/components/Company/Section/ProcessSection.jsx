import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const ProcessSection = () => (
  <section id="process">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag">
              We help you turn your idea into reality with
            </div>
            <h2>Our Process</h2>
          </div>
        </div>

        <div className="mt-5">
          <div className="main-timeline position-relative">
            <div className="d-flex justify-content-center mb-5 pb-md-5 pb-0">
              <div className="app-idea col-12 col-md-5 col-lg-4 p-4 rounded-4 position-relative d-flex justify-content-center">
                <div>
                  <span className="d-flex justify-content-center">
                    <svg
                      width="84"
                      height="84"
                      viewBox="0 0 84 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="83"
                        height="83"
                        rx="41.5"
                        fill="white"
                      />
                      <path
                        d="M17.7402 42.5H20.4486M42.1152 18.125V20.8333M63.7819 42.5H66.4902M24.7819 25.1667L26.6777 27.0625M59.4486 25.1667L57.5527 27.0625"
                        stroke="#042781"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.9909 53.334C31.7172 51.6287 30.0376 49.2512 29.1902 46.5383C28.3427 43.8255 28.3704 40.9147 29.2691 38.2184C30.1679 35.5221 31.8923 33.1769 34.1979 31.5151C36.5036 29.8532 39.2737 28.959 42.1159 28.959C44.958 28.959 47.7282 29.8532 50.0338 31.5151C52.3395 33.1769 54.0639 35.5221 54.9626 38.2184C55.8614 40.9147 55.889 43.8255 55.0416 46.5383C54.1942 49.2512 52.5146 51.6287 50.2409 53.334C49.1835 54.3807 48.3873 55.6617 47.9168 57.0732C47.4463 58.4847 47.3147 59.9872 47.5326 61.459C47.5326 62.8956 46.9619 64.2733 45.946 65.2891C44.9302 66.305 43.5525 66.8757 42.1159 66.8757C40.6793 66.8757 39.3015 66.305 38.2857 65.2891C37.2699 64.2733 36.6992 62.8956 36.6992 61.459C36.9171 59.9872 36.7855 58.4847 36.315 57.0732C35.8445 55.6617 35.0483 54.3807 33.9909 53.334"
                        stroke="#042781"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.8867 56.041H48.3451"
                        stroke="#042781"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h4 className="text-center">You’ve an app idea!</h4>
                  <p className="text-center">
                    We work with you to list down requirements and prepare project
                    estimations.
                  </p>
                </div>

                <div className="d-none d-md-flex justify-content-center align-items-center circle  position-absolute">
                  <h4 className="text-center">1</h4>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-0 col-md-6"></div>
              <div className="col-12 col-md-6 d-flex lets-brainstorm-before justify-content-end position-relative">
                <div className="col-12 col-md-11 col-lg-10 lets-brainstorm d-flex p-4 rounded-4 align-items-center flex-column flex-md-row">
                  <div className="me-0 me-md-3">
                    <svg
                      width="82"
                      height="83"
                      viewBox="0 0 82 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="82"
                        height="82"
                        rx="41"
                        fill="white"
                      />
                      <path
                        d="M50.5938 44.708C48.0797 44.708 45.6687 45.7067 43.891 47.4844C42.1133 49.2621 41.1146 51.6731 41.1146 54.1872V56.8955C41.1146 59.4095 42.1133 61.8206 43.891 63.5983C45.6687 65.376 48.0797 66.3747 50.5938 66.3747C53.1078 66.3747 55.5188 65.376 57.2965 63.5983C59.0742 61.8206 60.0729 59.4095 60.0729 56.8955V52.0205M31.6354 44.708C34.1494 44.708 36.5605 45.7067 38.3382 47.4844C40.1159 49.2621 41.1146 51.6731 41.1146 54.1872V56.8955C41.1146 59.4095 40.1159 61.8206 38.3382 63.5983C36.5605 65.376 34.1494 66.3747 31.6354 66.3747C29.1214 66.3747 26.7103 65.376 24.9326 63.5983C23.1549 61.8206 22.1562 59.4095 22.1562 56.8955V52.0205"
                        stroke="#F05114"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M56.0104 52.8333C58.5244 52.8333 60.9355 51.8346 62.7132 50.057C64.4909 48.2793 65.4896 45.8682 65.4896 43.3542C65.4896 40.8401 64.4909 38.4291 62.7132 36.6514C60.9355 34.8737 58.5244 33.875 56.0104 33.875H54.6562"
                        stroke="#F05114"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M60.0736 34.6875V27.1042C60.0736 24.5901 59.0749 22.1791 57.2972 20.4014C55.5195 18.6237 53.1084 17.625 50.5944 17.625C48.0804 17.625 45.6693 18.6237 43.8916 20.4014C42.1139 22.1791 41.1152 24.5901 41.1152 27.1042M26.2194 52.8333C23.7054 52.8333 21.2943 51.8346 19.5166 50.0569C17.7389 48.2793 16.7402 45.8682 16.7402 43.3542C16.7402 40.8401 17.7389 38.4291 19.5166 36.6514C21.2943 34.8737 23.7054 33.875 26.2194 33.875H27.5736"
                        stroke="#F05114"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.1562 34.6875V27.1042C22.1562 24.5901 23.1549 22.1791 24.9326 20.4014C26.7103 18.6237 29.1214 17.625 31.6354 17.625C34.1494 17.625 36.5605 18.6237 38.3382 20.4014C40.1159 22.1791 41.1146 24.5901 41.1146 27.1042V54.1875"
                        stroke="#F05114"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4>Let’s Brainstorm</h4>
                    <p>
                      We define the elements as development guidelines for
                      coding.
                    </p>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle  position-absolute">
                    <h4 className="text-center">2</h4>
                  </div>

                  <p className="position-absolute future-enhancement">
                    Future Enhancement
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-md-6 d-flex design-prototype-before position-relative">
                <div className="col-12 col-md-11 col-lg-10 design-prototype d-flex p-4 rounded-4 align-items-center flex-column flex-md-row flex-column-reverse">
                  <div>
                    <h4>Design Prototype</h4>
                    <p>
                      We create wireframes to identify problems before they
                      arises.
                    </p>
                  </div>

                  <div className="ms-0 ms-md-3">
                    <svg
                      width="82"
                      height="83"
                      viewBox="0 0 82 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="82"
                        height="82"
                        rx="41"
                        fill="white"
                      />
                      <path
                        d="M57.7506 19.333H25.2507C22.2591 19.333 19.834 21.7581 19.834 24.7497V57.2497C19.834 60.2412 22.2591 62.6663 25.2507 62.6663H57.7506C60.7422 62.6663 63.1673 60.2412 63.1673 57.2497V24.7497C63.1673 21.7581 60.7422 19.333 57.7506 19.333Z"
                        stroke="#221C69"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.834 35.583H63.1673"
                        stroke="#221C69"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.084 19.333V62.6663"
                        stroke="#221C69"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle position-absolute">
                    <h4 className="text-center">3</h4>
                  </div>
                </div>
              </div>
              <div className="col-0 col-md-6"></div>
            </div>

            <div className="row mb-5">
              <div className="col-0 col-md-6"></div>
              <div className="col-12 col-md-5 ms-0 ms-md-5 d-flex ui-design-before justify-content-center position-relative">
                <div className="col-12 col-md-11 col-lg-10 ui-design d-flex p-4 rounded-4 align-items-center flex-column flex-md-row">
                  <div className="me-0 me-md-3">
                    <svg
                      width="82"
                      height="83"
                      viewBox="0 0 82 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="82"
                        height="82"
                        rx="41"
                        fill="white"
                      />
                      <path
                        d="M49.2402 50.125C53.7275 50.125 57.3652 46.4873 57.3652 42C57.3652 37.5127 53.7275 33.875 49.2402 33.875C44.7529 33.875 41.1152 37.5127 41.1152 42C41.1152 46.4873 44.7529 50.125 49.2402 50.125Z"
                        stroke="#760F3A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M49.2402 17.625H32.9902C28.5029 17.625 24.8652 21.2627 24.8652 25.75C24.8652 30.2373 28.5029 33.875 32.9902 33.875H49.2402C53.7275 33.875 57.3652 30.2373 57.3652 25.75C57.3652 21.2627 53.7275 17.625 49.2402 17.625Z"
                        stroke="#760F3A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.9902 33.875C30.8354 33.875 28.7687 34.731 27.245 36.2548C25.7213 37.7785 24.8652 39.8451 24.8652 42C24.8652 44.1549 25.7213 46.2215 27.245 47.7452C28.7687 49.269 30.8354 50.125 32.9902 50.125H41.1152M32.9902 50.125C31.3833 50.125 29.8124 50.6015 28.4762 51.4943C27.1401 52.3871 26.0987 53.656 25.4837 55.1407C24.8688 56.6253 24.7079 58.259 25.0214 59.8351C25.3349 61.4112 26.1087 62.8589 27.245 63.9952C28.3813 65.1315 29.829 65.9054 31.4051 66.2189C32.9812 66.5324 34.6149 66.3715 36.0995 65.7565C37.5842 65.1416 38.8531 64.1002 39.7459 62.764C40.6387 61.4279 41.1152 59.857 41.1152 58.25V17.625"
                        stroke="#760F3A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4>UI Design</h4>
                    <p>
                      We refine the appearance of elements till you’re pleased.
                    </p>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle position-absolute">
                    <h4 className="text-center">4</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-md-6 d-flex design-prototype-before position-relative">
                <div className="col-12 col-md-11 col-lg-10 development d-flex p-4 rounded-4 align-items-center flex-column flex-md-row flex-column-reverse">
                  <div>
                    <h4>Development</h4>
                    <p>
                      Our approach to programming in iterations improving in
                      each stage.
                    </p>
                  </div>

                  <div className="ms-0 ms-md-3">
                    <svg
                      width="82"
                      height="83"
                      viewBox="0 0 82 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="82"
                        height="82"
                        rx="41"
                        fill="white"
                      />
                      <path
                        d="M36.9635 20.1919C38.1173 15.436 44.8827 15.436 46.0365 20.1919C46.2096 20.9063 46.5489 21.5698 47.0269 22.1283C47.5049 22.6868 48.108 23.1246 48.7872 23.406C49.4663 23.6874 50.2023 23.8044 50.9353 23.7476C51.6682 23.6907 52.3773 23.4617 53.005 23.079C57.184 20.5331 61.9696 25.316 59.4237 29.4977C59.0416 30.1251 58.8129 30.8338 58.7562 31.5663C58.6995 32.2987 58.8164 33.0342 59.0975 33.7129C59.3785 34.3916 59.8158 34.9945 60.3736 35.4724C60.9315 35.9504 61.5943 36.29 62.3081 36.4635C67.064 37.6173 67.064 44.3827 62.3081 45.5365C61.5937 45.7096 60.9302 46.0489 60.3717 46.5269C59.8132 47.0049 59.3754 47.608 59.094 48.2872C58.8126 48.9663 58.6956 49.7023 58.7524 50.4353C58.8093 51.1682 59.0383 51.8773 59.421 52.505C61.9669 56.684 57.184 61.4696 53.0023 58.9237C52.3749 58.5416 51.6662 58.3129 50.9337 58.2562C50.2013 58.1995 49.4658 58.3164 48.7871 58.5975C48.1084 58.8785 47.5055 59.3158 47.0276 59.8736C46.5496 60.4315 46.21 61.0943 46.0365 61.8081C44.8827 66.564 38.1173 66.564 36.9635 61.8081C36.7904 61.0937 36.4511 60.4302 35.9731 59.8717C35.4951 59.3132 34.892 58.8754 34.2128 58.594C33.5337 58.3126 32.7977 58.1956 32.0647 58.2524C31.3318 58.3093 30.6227 58.5383 29.995 58.921C25.816 61.4669 21.0304 56.684 23.5762 52.5023C23.9584 51.8749 24.1871 51.1662 24.2438 50.4337C24.3005 49.7013 24.1836 48.9658 23.9025 48.2871C23.6215 47.6084 23.1842 47.0055 22.6264 46.5276C22.0685 46.0496 21.4057 45.71 20.6919 45.5365C15.936 44.3827 15.936 37.6173 20.6919 36.4635C21.4063 36.2904 22.0698 35.9511 22.6283 35.4731C23.1868 34.9951 23.6246 34.392 23.906 33.7128C24.1874 33.0337 24.3044 32.2977 24.2476 31.5647C24.1907 30.8318 23.9617 30.1227 23.579 29.495C21.0331 25.316 25.816 20.5304 29.9977 23.0762C32.706 24.7229 36.216 23.2658 36.9635 20.1919Z"
                        stroke="#065860"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.5 49.125C45.9873 49.125 49.625 45.4873 49.625 41C49.625 36.5127 45.9873 32.875 41.5 32.875C37.0127 32.875 33.375 36.5127 33.375 41C33.375 45.4873 37.0127 49.125 41.5 49.125Z"
                        stroke="#065860"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle position-absolute">
                    <h4 className="text-center">5</h4>
                  </div>
                </div>
              </div>
              <div className="col-0 col-md-6"></div>
            </div>

            <div className="row mb-5">
              <div className="col-0 col-md-6"></div>
              <div className="col-12 col-md-6 d-flex staging-release-before justify-content-end position-relative">
                <div className="col-12 col-md-11 col-lg-10 staging-release d-flex p-4 rounded-4 align-items-center flex-column flex-md-row">
                  <div className="me-0 me-md-3">
                    <svg
                      width="82"
                      height="83"
                      viewBox="0 0 82 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="82"
                        height="82"
                        rx="41"
                        fill="white"
                      />
                      <path
                        d="M39.5 26.2344C38.0939 26.2344 36.7194 26.6513 35.5502 27.4325C34.3811 28.2137 33.4699 29.324 32.9318 30.6231C32.3937 31.9222 32.2529 33.3516 32.5272 34.7307C32.8015 36.1098 33.4786 37.3766 34.4729 38.3708C35.4672 39.3651 36.7339 40.0422 38.113 40.3165C39.4921 40.5908 40.9216 40.45 42.2206 39.912C43.5197 39.3739 44.63 38.4626 45.4112 37.2935C46.1924 36.1244 46.6094 34.7499 46.6094 33.3438C46.6027 31.4603 45.8515 29.6559 44.5197 28.3241C43.1879 26.9922 41.3835 26.2411 39.5 26.2344ZM39.5 38.4219C38.4956 38.4219 37.5138 38.124 36.6787 37.5661C35.8437 37.0081 35.1928 36.215 34.8084 35.2871C34.4241 34.3592 34.3235 33.3381 34.5194 32.3531C34.7154 31.368 35.199 30.4632 35.9092 29.753C36.6194 29.0428 37.5242 28.5591 38.5093 28.3632C39.4944 28.1673 40.5154 28.2678 41.4433 28.6522C42.3712 29.0365 43.1643 29.6874 43.7223 30.5225C44.2803 31.3576 44.5781 32.3394 44.5781 33.3438C44.5715 34.6885 44.0343 35.9763 43.0834 36.9272C42.1325 37.878 40.8447 38.4152 39.5 38.4219ZM39.5 46.5469C38.0939 46.5469 36.7194 46.9638 35.5502 47.745C34.3811 48.5262 33.4699 49.6365 32.9318 50.9356C32.3937 52.2347 32.2529 53.6641 32.5272 55.0432C32.8015 56.4223 33.4786 57.6891 34.4729 58.6833C35.4672 59.6776 36.7339 60.3547 38.113 60.629C39.4921 60.9033 40.9216 60.7625 42.2206 60.2245C43.5197 59.6864 44.63 58.7751 45.4112 57.606C46.1924 56.4369 46.6094 55.0624 46.6094 53.6562C46.6027 51.7728 45.8515 49.9684 44.5197 48.6366C43.1879 47.3047 41.3835 46.5536 39.5 46.5469ZM39.5 58.7344C38.4956 58.7344 37.5138 58.4366 36.6787 57.8786C35.8437 57.3206 35.1928 56.5275 34.8084 55.5996C34.4241 54.6717 34.3235 53.6506 34.5194 52.6656C34.7154 51.6805 35.199 50.7757 35.9092 50.0655C36.6194 49.3553 37.5242 48.8716 38.5093 48.6757C39.4944 48.4798 40.5154 48.5803 41.4433 48.9647C42.3712 49.349 43.1643 49.9999 43.7223 50.835C44.2803 51.6701 44.5781 52.6519 44.5781 53.6562C44.5715 55.001 44.0343 56.2888 43.0834 57.2397C42.1325 58.1905 40.8447 58.7277 39.5 58.7344ZM61.8438 48.5781H56.7656V30.2969H61.8438C62.1131 30.2969 62.3714 30.1899 62.5619 29.9994C62.7524 29.8089 62.8594 29.5506 62.8594 29.2812C62.8594 29.0119 62.7524 28.7536 62.5619 28.5631C62.3714 28.3726 62.1131 28.2656 61.8438 28.2656H56.7656V21.1562C56.7656 20.3482 56.4446 19.5732 55.8732 19.0018C55.3018 18.4304 54.5268 18.1094 53.7188 18.1094H25.2812C24.4732 18.1094 23.6982 18.4304 23.1268 19.0018C22.5554 19.5732 22.2344 20.3482 22.2344 21.1562V28.2656H17.1562C16.8869 28.2656 16.6286 28.3726 16.4381 28.5631C16.2476 28.7536 16.1406 29.0119 16.1406 29.2812C16.1406 29.5506 16.2476 29.8089 16.4381 29.9994C16.6286 30.1899 16.8869 30.2969 17.1562 30.2969H22.2344V48.5781H17.1562C16.8869 48.5781 16.6286 48.6851 16.4381 48.8756C16.2476 49.0661 16.1406 49.3244 16.1406 49.5938C16.1406 49.8631 16.2476 50.1214 16.4381 50.3119C16.6286 50.5024 16.8869 50.6094 17.1562 50.6094H22.2344V65.8438C22.2344 66.6518 22.5554 67.4268 23.1268 67.9982C23.6982 68.5696 24.4732 68.8906 25.2812 68.8906H53.7188C54.5268 68.8906 55.3018 68.5696 55.8732 67.9982C56.4446 67.4268 56.7656 66.6518 56.7656 65.8438V50.6094H61.8438C62.1131 50.6094 62.3714 50.5024 62.5619 50.3119C62.7524 50.1214 62.8594 49.8631 62.8594 49.5938C62.8594 49.3244 62.7524 49.0661 62.5619 48.8756C62.3714 48.6851 62.1131 48.5781 61.8438 48.5781ZM54.7344 65.8438C54.7344 66.1131 54.6274 66.3714 54.4369 66.5619C54.2464 66.7524 53.9881 66.8594 53.7188 66.8594H25.2812C25.0119 66.8594 24.7536 66.7524 24.5631 66.5619C24.3726 66.3714 24.2656 66.1131 24.2656 65.8438V21.1562C24.2656 20.8869 24.3726 20.6286 24.5631 20.4381C24.7536 20.2476 25.0119 20.1406 25.2812 20.1406H53.7188C53.9881 20.1406 54.2464 20.2476 54.4369 20.4381C54.6274 20.6286 54.7344 20.8869 54.7344 21.1562V65.8438Z"
                        fill="#665505"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4>Staging Release</h4>
                    <p>
                      For your review purpose, we setup the app stage within a
                      limited group.
                    </p>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle position-absolute">
                    <h4 className="text-center">6</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-md-6 d-flex launch-before position-relative">
                <div className="col-xl-4 col-lg-3"></div>
                <div className="col-12 col-xl-6 col-md-11 col-lg-7 launch d-flex p-4 rounded-4 align-items-center justify-content-end flex-column flex-md-row flex-column-reverse">
                  <div>
                    <h4>Launch</h4>
                    <p>Your app is live!</p>
                  </div>

                  <div className="ms-0 ms-md-3">
                    <svg
                      width="82"
                      height="82"
                      viewBox="0 0 82 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="82" height="82" rx="41" fill="white" />
                      <g clipPath="url(#clip0_1522_7811)">
                        <path
                          d="M49.125 35.583L38.2917 46.4163L54.5417 62.6663L65.375 19.333L16.625 38.2913L27.4583 43.708L32.875 59.958L41 49.1247"
                          stroke="#52741A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1522_7811">
                          <rect
                            width="65"
                            height="65"
                            fill="white"
                            transform="translate(8.5 8.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="d-none d-md-flex justify-content-center align-items-center circle position-absolute">
                    <h4 className="text-center">7</h4>
                  </div>

                  <p className="position-absolute approved">Approved</p>
                </div>
              </div>
              <div className="col-0 col-md-6"></div>
            </div>
          </div>

          <div className="mt-5">
            <div className="position-relative overflow-hidden rounded-3 shadow-lg">
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around  process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 py-2">
                  Integrate our battle tested process in your project
                </h4>
                <ButtonWithModal
                  className="outlined"
                  modalType="estimate"
                  title="Build With Us"
                  subTitle="Let our experts know about your project and they will get back to you with solutions best suited for your needs."
                >
                  Build With Us
                  <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                </ButtonWithModal>
              </div>
              <div className="cta-btn-right position-absolute"></div>
              <div className="cta-btn-left position-absolute"></div>
              <div className="background-blur-right position-absolute"></div>
              <div className="background-blur-left position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
