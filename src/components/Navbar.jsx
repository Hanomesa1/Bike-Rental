import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the registration form submission here
    // You can use the `formData` object to access the entered values
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup); // Toggle the state
  };
  const closeRegisterPopup = () => {
    setShowRegisterPopup(false);
  };
  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" onClick={closeRegisterPopup} />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/" onClick={closeRegisterPopup}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about" onClick={closeRegisterPopup}>
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models" onClick={closeRegisterPopup}>
                Bike Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials" onClick={closeRegisterPopup}>
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team" onClick={closeRegisterPopup}>
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact" onClick={closeRegisterPopup}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link
              className="navbar__buttons__register"
              to="#"
              onClick={toggleRegisterPopup}
            ><i class="fa-regular fa-user"></i> Account
            </Link>
            {showRegisterPopup && (
              <div className="register-popup">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit">Register</button>
                </form>
              </div>
            )}
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
