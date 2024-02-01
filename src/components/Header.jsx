import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 text-bg-dark header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 header-ui">
            <li className="header-li">
              <Link to="/" className="nav-link px-2 text-white ">
                Home
              </Link>
            </li>
            <li className="header-li">
              <a
                href="https://www.linkedin.com/in/pavankyada/"
                target="blank"
                className="nav-link px-2 text-white"
              >
                Profile
              </a>
            </li>
            <li className="header-li">
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
