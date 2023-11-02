import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Ducati from "../images/bikes-big/drupal.jpg";
import BMW from "../images/bikes-big/bmw1.jpg";
import Harley from "../images/bikes-big/harley.jpg";
import Agusta from "../images/bikes-big/Agusta.jpg";
import Yamaha from "../images/bikes-big/yamaha yrf.jpg";
import Ksaki from "../images/bikes-big/kawsaki1.jpg";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Ducati} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Panigale V4 R</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                    <i class="fa-solid fa-motorcycle"></i> &nbsp; Ducati
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                    <i class="fa-solid fa-motorcycle"></i> &nbsp; 2023
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BMW} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>HP4 RACE</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                    <i class="fa-solid fa-motorcycle"></i> &nbsp; BMW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; 2019
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Harley} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>CVO</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; Harley-Davidson
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; 2023
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Hybrid &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Agusta} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>F4 Claudio</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; MV Agusta
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; 2018
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Hybrid &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Yamaha} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>R1</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i class="fa-solid fa-motorcycle"></i>&nbsp;Yamaha
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; 2020
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Ksaki} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>R1 /18</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i class="fa-solid fa-motorcycle"></i>&nbsp;K Ninja
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-motorcycle"></i> &nbsp; 2023
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Hybrid &nbsp; <i class="fa-solid fa-motorcycle"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a bike by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 222 1234567</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
