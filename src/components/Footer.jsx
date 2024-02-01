import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container footer-margin">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top main-margin  ">
        <div className="col-md-4 d-flex align-items-center ">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Smedia, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/pavankyada/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/pavan.kyada.16/"
              target="blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://twitter.com/KyadaPavan"
              target="blank"
            >
              <RiTwitterXLine />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
