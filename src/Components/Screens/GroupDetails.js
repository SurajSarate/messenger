import React from "react";

function GroupDetails() {
  return (
    <div
      className="offcanvas offcanvas-end offcanvas-aside"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvas-more-group"
    >
      <div className="offcanvas-header py-4 py-lg-7 border-bottom">
        <a className="icon icon-lg text-muted" href="#" data-bs-dismiss="offcanvas">
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
        </a>

        <div className="visibility-xl-invisible overflow-hidden text-center">
          <h5 className="text-truncate">Bootstrap Community</h5>
          <p className="text-truncate">45 members, 9 online</p>
        </div>

        <div className="dropdown">
          <a
            className="icon icon-lg text-muted"
            href="#"
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
          </a>

          <ul className="dropdown-menu">
            <li>
              <a href="#" className="dropdown-item d-flex align-items-center">
                Edit
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
                    className="feather feather-edit-3"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item d-flex align-items-center">
                Mute
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
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                href="#"
                className="dropdown-item d-flex align-items-center text-danger"
              >
                Leave
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
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas-body hide-scrollbar">
        <div className="text-center py-10">
          <div className="row gy-6">
            <div className="col-12">
              <div className="avatar avatar-xl mx-auto">
                <img
                  src="assets/img/avatars/bootstrap.svg"
                  alt="#"
                  className="avatar-img"
                />
              </div>
            </div>

            <div className="col-12">
              <h4>Bootstrap Community</h4>
              <p>
                Bootstrap is an open source <br /> toolkit for developing web
                with <br /> HTML, CSS, and JS.
              </p>
            </div>
          </div>
        </div>

        <ul className="nav nav-pills nav-justified" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="pill"
              href="#offcanvas-group-tab-members"
              role="tab"
              aria-controls="offcanvas-group-tab-members"
              aria-selected="true"
            >
              People
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="pill"
              href="#offcanvas-group-tab-media"
              role="tab"
              aria-controls="offcanvas-group-tab-media"
              aria-selected="true"
            >
              Media
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="pill"
              href="#offcanvas-group-tab-files"
              role="tab"
              aria-controls="offcanvas-group-tab-files"
              aria-selected="false"
            >
              Files
            </a>
          </li>
        </ul>

        <div className="tab-content py-2" role="tablist">
          <div
            className="tab-pane fade show active"
            id="offcanvas-group-tab-members"
            role="tabpanel"
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <a href="#" className="avatar avatar-online">
                      <img
                        className="avatar-img"
                        src="assets/img/avatars/1.jpeg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="col">
                    <h5>
                      <a href="#">Michael Fuller</a>
                    </h5>
                    <p>online</p>
                  </div>

                  <div className="col-auto">
                    <span className="extra-small text-primary">owner</span>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Promote
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
                                className="feather feather-trending-up"
                              >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Restrict
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
                                className="feather feather-trending-down"
                              >
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
                          >
                            Delete
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <a href="#" className="avatar avatar-online">
                      <img
                        className="avatar-img"
                        src="assets/img/avatars/11.jpg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="col">
                    <h5>
                      <a href="#">Mila White</a>
                    </h5>
                    <p>online</p>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Promote
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
                                className="feather feather-trending-up"
                              >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Restrict
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
                                className="feather feather-trending-down"
                              >
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
                          >
                            Delete
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <a href="#" className="avatar">
                      <img
                        className="avatar-img"
                        src="assets/img/avatars/6.jpg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="col">
                    <h5>
                      <a href="#">Don Knight</a>
                    </h5>
                    <p>last seen recently</p>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Promote
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
                                className="feather feather-trending-up"
                              >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Restrict
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
                                className="feather feather-trending-down"
                              >
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
                          >
                            Delete
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <a href="#" className="avatar">
                      <img
                        className="avatar-img"
                        src="assets/img/avatars/8.jpg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="col">
                    <h5>
                      <a href="#">Elise Dennis</a>
                    </h5>
                    <p>last seen 3 days ago</p>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Promote
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
                                className="feather feather-trending-up"
                              >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Restrict
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
                                className="feather feather-trending-down"
                              >
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
                          >
                            Delete
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <a href="#" className="avatar">
                      <span className="avatar-text">O</span>
                    </a>
                  </div>

                  <div className="col">
                    <h5>
                      <a href="#">Ollie Chandler</a>
                    </h5>
                    <p>last seen within a week</p>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Promote
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
                                className="feather feather-trending-up"
                              >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            Restrict
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
                                className="feather feather-trending-down"
                              >
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
                          >
                            Delete
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="offcanvas-group-tab-media"
            role="tabpanel"
          >
            <div className="row row-cols-3 g-3 py-6">
              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-1.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/1.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-2.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/2.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-3.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/3.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-1.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/4.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-2.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/5.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-3.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/6.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-1.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/7.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-2.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/8.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-media-preview"
                  data-theme-img-url="assets/img/chat/media-3.jpg"
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/chat/9.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="offcanvas-group-tab-files"
            role="tabpanel"
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar-group">
                      <a href="#" className="avatar avatar-sm">
                        <img
                          src="assets/img/avatars/6.jpg"
                          className="avatar-img"
                          alt="#"
                        />
                      </a>

                      <a href="#" className="avatar avatar-sm">
                        <span className="avatar-text bg-primary">
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
                            className="feather feather-file-text"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col overflow-hidden">
                    <h5 className="text-truncate">
                      <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                    </h5>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">79.2 KB</small>
                      </li>

                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">txt</small>
                      </li>
                    </ul>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                                className="feather feather-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar-group">
                      <a href="#" className="avatar avatar-sm">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/6.jpg"
                          alt="#"
                        />
                      </a>

                      <a href="#" className="avatar avatar-sm">
                        <span className="avatar-text bg-warning">
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
                            className="feather feather-film"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="2.18"
                              ry="2.18"
                            ></rect>
                            <line x1="7" y1="2" x2="7" y2="22"></line>
                            <line x1="17" y1="2" x2="17" y2="22"></line>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <line x1="2" y1="7" x2="7" y2="7"></line>
                            <line x1="2" y1="17" x2="7" y2="17"></line>
                            <line x1="17" y1="17" x2="22" y2="17"></line>
                            <line x1="17" y1="7" x2="22" y2="7"></line>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col overflow-hidden">
                    <h5 className="text-truncate">
                      <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                    </h5>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">54.2 KB</small>
                      </li>

                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">mp4</small>
                      </li>
                    </ul>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                                className="feather feather-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar-group">
                      <a href="#" className="avatar avatar-sm">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/5.jpg"
                          alt="#"
                        />
                      </a>

                      <a href="#" className="avatar avatar-sm">
                        <span className="avatar-text bg-primary">
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
                            className="feather feather-file-text"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col overflow-hidden">
                    <h5 className="text-truncate">
                      <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                    </h5>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">64.8 KB</small>
                      </li>

                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">jpg</small>
                      </li>
                    </ul>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                                className="feather feather-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar-group">
                      <a href="#" className="avatar avatar-sm">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/11.jpg"
                          alt="#"
                        />
                      </a>

                      <a href="#" className="avatar avatar-sm">
                        <span className="avatar-text bg-warning">
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
                            className="feather feather-film"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="2.18"
                              ry="2.18"
                            ></rect>
                            <line x1="7" y1="2" x2="7" y2="22"></line>
                            <line x1="17" y1="2" x2="17" y2="22"></line>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <line x1="2" y1="7" x2="7" y2="7"></line>
                            <line x1="2" y1="17" x2="7" y2="17"></line>
                            <line x1="17" y1="17" x2="22" y2="17"></line>
                            <line x1="17" y1="7" x2="22" y2="7"></line>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col overflow-hidden">
                    <h5 className="text-truncate">
                      <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                    </h5>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">80.8 KB</small>
                      </li>

                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">mp4</small>
                      </li>
                    </ul>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                                className="feather feather-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar-group">
                      <a href="#" className="avatar avatar-sm">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/3.jpg"
                          alt="#"
                        />
                      </a>

                      <a href="#" className="avatar avatar-sm">
                        <span className="avatar-text bg-success">
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
                            className="feather feather-image"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col overflow-hidden">
                    <h5 className="text-truncate">
                      <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                    </h5>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">100 KB</small>
                      </li>

                      <li className="list-inline-item">
                        <small className="text-uppercase text-muted">jpg</small>
                      </li>
                    </ul>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        className="icon text-muted"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                                className="feather feather-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
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
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center text-danger"
                            href="#"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails;
