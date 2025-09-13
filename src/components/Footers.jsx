import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start w-100 px-0 bg-info"
      style={{ marginTop: "3rem" }}
    >
      <div className="p-4">
        <div className="row my-2 w-100 px-0 mx-0">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="shadow-1-strong d-flex align-items-center justify-content-center mx-auto"
              style={{ width: "150px", height: "150px", marginTop: "-20px" }}
            >
              <img
                src="/images/logos.png"
                height="50"
                width="200"
                alt="Logo"
                loading="lazy"
              />
            </div>
            <p className="text-center" style={{ paddingLeft: "30px" }}>
              ...Real African Dance
              <span>
                {/* <a
                  href="/admin/dashboarda"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                ></a> */}
              </span>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <p className="text-uppercase mb-4">
              <b>Dance Events</b>
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/Dance-Workshop"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Dance Workshops
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Performances"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Performances
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <p className="text-uppercase mb-4">
              <b>Continuing Education</b>
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/cars"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Structure + Dates
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/gadgets"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Concept
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/agric"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Books
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/agric"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Learning Platform
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/registration"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-md-0">
            <p className="text-uppercase mb-4">
              <b>About Us</b>
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/cars"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Who We Are
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/cars"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/cars"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Newsletter Row */}
        <div className="row justify-content-center align-items-center mb-3 g-2">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            {/* Social Icons */}
            <a
              href="https://www.instagram.com/tanzderkulturen/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com/tanzderkulturen/?_rdc=1&_rdr#/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com/@tanzderkulturen/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
              aria-label="LinkedIn"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.tiktok.com/@tanzderkulturen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            {/* Newsletter Button */}
            <button
              type="button"
              className="btn btn-dark btn-sm px-4 rounded-pill fw-bold shadow"
              data-bs-toggle="modal"
              data-bs-target="#newsletterModal"
            >
              <i className="bi bi-envelope-fill me-1"></i> Subscribe to
              Newsletter
            </button>
          </div>
        </div>

        {/* Newsletter Modal */}
        <div
          className="modal fade"
          id="newsletterModal"
          tabIndex="-1"
          aria-labelledby="newsletterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-dark">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="newsletterModalLabel">
                  <i className="bi bi-envelope-fill me-2"></i>Subscribe to our
                  Newsletter
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="newsletterEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="newsletterEmail"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="submit"
                    className="btn btn-danger w-100 rounded-pill"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Legal Links Row */}
        <div className="row justify-content-center mb-2">
          <div className="col-12 text-center">
            <Link
              to="/Imprints"
              style={{ textDecoration: "none" }}
              className="text-dark mx-2 text-decoration-underline"
            >
              Imprint
            </Link>
            <span className="text-dark">|</span>
            <Link
              to="/Privacy"
              style={{ textDecoration: "none" }}
              className="text-dark mx-2 text-decoration-underline"
            >
              Privacy Policy
            </Link>
            <span className="text-dark">|</span>
            <Link
              to="/Terms"
              style={{ textDecoration: "none" }}
              className="text-dark mx-2 text-decoration-underline"
            >
              Terms of use
            </Link>
          </div>
        </div>
        <hr />

        <div className="p-3 row text-white align-items-center text-center">
          <div>
            <b>
              <p className="mb-0">
                Copyright &copy; {new Date().getFullYear()} Tanz Der-Kulturen.
                All Rights
                <Link
                  to="/admin/pages/Admin"
                  style={{ textDecoration: "none" }}
                  className="text-dark mx-2 text-decoration-underline"
                >
                  Reserved
                </Link>
              </p>
            </b>
          </div>
        </div>
        <div>
          {/* <p className="text-center text-dark mb-0">...designed With <i className="bi bi-heart-fill text-danger"></i> by <a href="https://www.linkedin.com/in/emma-imoudu-b2053b203/" className="text-danger">Erua Imoudu Emma</a> for <a>Iwalewa Gallery of Arts</a>.</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
