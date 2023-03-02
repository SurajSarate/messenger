import React from "react";
import { Link } from "react-router-dom";

function EmptyChatScreen() {
  return (
      <main className="main is-visible" data-dropzone-area="">
        <div className="container h-100">
          <div className="d-flex flex-column h-100 position-relative">
            <div className="chat-header border-bottom py-4 py-lg-7">
              <div className="row align-items-center">
                <div className="col-2 d-xl-none">
                  <Link
                    className="icon icon-lg text-muted"
                    to="/home"
                    data-toggle-chat=""
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
                      className="feather feather-chevron-left"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Link>
                </div>

                <div className="col-8 col-xl-12">
                  <div className="row align-items-center text-center text-xl-start">
                    <div className="col-12 col-xl-6">
                      <div className="row align-items-center gx-5">
                        <div className="col-auto">
                          <div className="avatar d-none d-xl-inline-block">
                            <img
                              className="avatar-img"
                              src="assets/img/avatars/8.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="col overflow-hidden">
                          <h5 className="text-truncate">Elise Dennis</h5>
                          <p className="text-truncate">
                            is typing
                            <span className="typing-dots">
                              <span>.</span>
                              <span>.</span>
                              <span>.</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                      <div className="row align-items-center justify-content-end gx-6">
                        <div className="col-auto">
                          <Link
                            to="#"
                            className="icon icon-lg text-muted"
                            data-offcanvas="info"
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
                              className="feather feather-more-horizontal"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </Link>
                        </div>

                        <div className="col-auto">
                          <div className="avatar-group">
                            <Link
                              to="#"
                              className="avatar avatar-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-user-profile"
                            >
                              <img
                                className="avatar-img"
                                src="assets/img/avatars/8.jpg"
                                alt="#"
                              />
                            </Link>

                            <Link
                              to="#"
                              className="avatar avatar-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-profile"
                            >
                              <img
                                className="avatar-img"
                                src="assets/img/avatars/1.jpeg"
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-2 d-xl-none text-end">
                  <Link
                    to="#"
                    className="icon icon-lg text-muted"
                    data-offcanvas="info"
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
                </div>
              </div>
            </div>

            <div className="chat-body hide-scrollbar flex-1 h-100">
              <div className="chat-body-inner h-100">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="text-center mb-6">
                    <span className="icon icon-xl text-muted">
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
                        className="feather feather-send"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </span>
                  </div>

                  <p className="text-center text-muted">
                    No messages yet, <br /> start the conversation!
                  </p>
                </div>
              </div>
            </div>

            <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
              <div
                className="dz-preview bg-dark"
                id="dz-preview-row"
                data-horizontal-scroll=""
              ></div>

              <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
                <div className="row align-items-center gx-0">
                  <div className="col-auto">
                    <Link
                      to="#"
                      className="btn btn-icon btn-link text-body rounded-circle"
                      id="dz-btn"
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
                        className="feather feather-paperclip"
                      >
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                      </svg>
                    </Link>
                  </div>

                  <div className="col">
                    <div className="input-group">
                      <textarea
                        className="form-control px-0"
                        placeholder="Type your message..."
                        rows="1"
                        data-emoji-input=""
                        data-autosize="true"
                      ></textarea>

                      <Link
                        to="#"
                        className="input-group-text text-body pe-0"
                        data-emoji-btn=""
                      >
                        <span className="icon icon-lg">
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
                            className="feather feather-smile"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button className="btn btn-icon btn-primary rounded-circle ms-5">
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
                        className="feather feather-send"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
  );
}

export default EmptyChatScreen;
