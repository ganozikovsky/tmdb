import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/gonzalo-agustin-nozikovsky-484151182/"
            role="button"
            data-mdb-ripple-color="dark"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <!-- Github --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/ganozikovsky"
            role="button"
            data-mdb-ripple-color="dark"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center text-dark p-3 fst-italic"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©2022 Copyright: ganozikovsky@gmail.com
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
