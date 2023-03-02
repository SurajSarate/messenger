import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navigation home d-flex flex-column text-center navbar navbar-light hide-scrollbar">
        <Link to="/" title="Messenger" className="d-none d-xl-block mb-6">
          <svg
            version="1.1"
            width="46px"
            height="46px"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 46 46"
            enableBackground="new 0 0 46 46"
            xmlSpace="preserve"
          >
            <polygon opacity="0.7" points="45,11 36,11 35.5,1 " />
            <polygon points="35.5,1 25.4,14.1 39,21 " />
            <polygon opacity="0.4" points="17,9.8 39,21 17,26 " />
            <polygon opacity="0.7" points="2,12 17,26 17,9.8 " />
            <polygon opacity="0.7" points="17,26 39,21 28,36 " />
            <polygon points="28,36 4.5,44 17,26 " />
            <polygon points="17,26 1,26 10.8,20.1 " />
          </svg>
        </Link>
        <ul
          className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3"
          role="tablist"
        >
          <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
            <Link className="nav-link py-0 py-lg-8" to="#" title="">
              <div className="icon icon-xl">
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
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link py-0 py-lg-8"
              id="tab-create-chat"
              to="#tab-content-create-chat"
              title="Create chat"
              data-bs-toggle="tab"
              role="tab"
            >
              <div className="icon icon-xl">
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
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link py-0 py-lg-8"
              id="tab-friends"
              to="#tab-content-friends"
              title="Friends"
              data-bs-toggle="tab"
              role="tab"
            >
              <div className="icon icon-xl">
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
                  className="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active py-0 py-lg-8"
              id="tab-chats"
              to="#tab-content-chats"
              title="Chats"
              data-bs-toggle="tab"
              role="tab"
            >
              <div className="icon icon-xl icon-badged">
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
                  className="feather feather-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="badge badge-circle bg-primary">
                  <span>4</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link py-0 py-lg-8"
              id="tab-notifications"
              to="#tab-content-notifications"
              title="Notifications"
              data-bs-toggle="tab"
              role="tab"
            >
              <div className="icon icon-xl">
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
            </Link>
          </li>
          <li className="nav-item d-none d-xl-block">
            <Link
              className="nav-link py-0 py-lg-8"
              id="tab-settings"
              to="#tab-content-settings"
              title="Settings"
              data-bs-toggle="tab"
              role="tab"
            >
              <div className="icon icon-xl">
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
                  className="feather feather-settings"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-link p-0 mt-lg-2"
              data-bs-toggle="modal"
              data-bs-target="#modal-profile"
            >
              <div className="avatar avatar-online mx-auto d-none d-xl-block">
                <img className="avatar-img" src="assets/img/avatars/1.jpeg" alt="" />
              </div>
              <div className="avatar avatar-online avatar-xs d-xl-none">
                <img className="avatar-img" src="assets/img/avatars/1.jpeg" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
