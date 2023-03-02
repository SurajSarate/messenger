import React from "react";

function AddMemberToGroup() {
  return (
    <div
      className="offcanvas offcanvas-end offcanvas-aside"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvas-add-members"
    >
      <div className="offcanvas-header py-4 py-lg-7 border-bottom ">
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
          <h5 className="text-truncate">Members</h5>
          <p className="text-truncate">Add new members</p>
        </div>

        <a
          className="icon icon-lg text-muted"
          data-bs-toggle="collapse"
          href="#search-members"
          role="button"
          aria-expanded="false"
          aria-controls="search-members"
          onClick="event.preventDefault();"
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
            className="feather feather-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </a>
      </div>

      <div className="offcanvas-body hide-scrollbar py-0">
        <div className="collapse" id="search-members">
          <div className="border-bottom py-6">
            <form action="#">
              <div className="input-group">
                <div className="input-group-text" id="search-user">
                  <div className="icon icon-lg">
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
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control form-control-lg ps-0"
                  placeholder="User name or phone"
                  aria-label="User name or phone"
                  aria-describedby="search-user"
                />
              </div>
            </form>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small className="text-uppercase text-muted">B</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar ">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/6.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>Bill Marrow</h5>
                <p>last seen 3 days ago</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-1"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-1"></label>
          </li>

          <li className="list-group-item">
            <small className="text-uppercase text-muted">D</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar ">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>Damian Binder</h5>
                <p>last seen within a week</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-2"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-2"></label>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <span className="avatar-text">D</span>
                </div>
              </div>
              <div className="col">
                <h5>Don Knight</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-3"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-3"></label>
          </li>

          <li className="list-group-item">
            <small className="text-uppercase text-muted">E</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/8.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>Elise Dennis</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-4"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-4"></label>
          </li>

          <li className="list-group-item">
            <small className="text-uppercase text-muted">M</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar ">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/11.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>Mila White</h5>
                <p>last seen a long time ago</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-5"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-5"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-5"></label>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <span className="avatar-text">M</span>
                </div>
              </div>
              <div className="col">
                <h5>Michael Fuller</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-6"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-6"></label>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar ">
                  <span className="avatar-text">M</span>
                </div>
              </div>
              <div className="col">
                <h5>Marshall Wallaker</h5>
                <p>last seen within a month</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-7"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-7"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-7"></label>
          </li>

          <li className="list-group-item">
            <small className="text-uppercase text-muted">O</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <span className="avatar-text">O</span>
                </div>
              </div>
              <div className="col">
                <h5>Ollie Chandler</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-8"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-8"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-8"></label>
          </li>

          <li className="list-group-item">
            <small className="text-uppercase text-muted">W</small>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar ">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>Warren White</h5>
                <p>last seen recently</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-9"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-9"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-9"></label>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/7.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <h5>William Wright</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-10"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-10"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-10"></label>
          </li>

          <li className="list-group-item">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div className="avatar avatar-online">
                  <span className="avatar-text">W</span>
                </div>
              </div>
              <div className="col">
                <h5>Winton Wilkinson</h5>
                <p>online</p>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="id-add-user-user-11"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="id-add-user-user-11"
                  ></label>
                </div>
              </div>
            </div>
            <label className="stretched-label" htmlFor="id-add-user-user-11"></label>
          </li>
        </ul>
      </div>

      <div className="offcanvas-footer border-top py-4 py-lg-7">
        <a
          href="#"
          className="btn btn-lg btn-primary w-100 d-flex align-items-center"
        >
          Add members
          <span className="icon ms-auto">
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
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default AddMemberToGroup;
