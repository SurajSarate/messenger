import React from "react";
import {Link} from 'react-router-dom'
function MediaPreview() {
  return (
    <div
      className="modal fade"
      id="modal-media-preview"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-xl-down">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close btn-close-arrow"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div>
              <div className="dropdown">
                <Link
                  className="icon text-muted"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      Download
                      <div className="icon ms-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-download-cloud"
                        >
                          <polyline points="8 17 12 21 16 17"></polyline>
                          <line x1="12" y1="12" x2="12" y2="21"></line>
                          <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      Share
                      <div className="icon ms-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-share-2"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center text-danger"
                      to="#"
                    >
                      <span className="me-auto">Delete</span>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-trash-2"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-body p-0">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img className="img-fluid modal-preview-url" src="#" alt="#" />
            </div>
          </div>
          <div className="modal-footer">
            <div className="w-100 text-center">
              <h6>
                <Link to="#">Marshall Wallaker</Link>
              </h6>
              <p className="small">Today at 14:43</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPreview;
