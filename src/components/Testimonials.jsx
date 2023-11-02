import Img2 from "../images/testimonials/test1.jpg";
import Img3 from "../images/testimonials/test2.jpg";



function Testimonials() {

  return (
    <>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            
            <div className="all-testimonials" >
            
            <div className= "all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "I had an incredible experience with this bike rental company during my recent trip. Renting a motorbike from them was the best decision I made for exploring the region. Their booking process was straightforward and convenient, allowing me to secure the bike of my choice well in advance. When I arrived at their rental shop, I was greeted warmly by their friendly staff. 
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Akhil</h4>
                      <p>Chennai</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "My motorbike rental experience with Bike rental was nothing short of exceptional. From start to finish, they exceeded my expectations in every aspect. The process of renting the bike was simple and efficient, thanks to their user-friendly website and quick response to my inquiry. They helped me choose the perfect motorbike that suited my riding style and preferences. 
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Vikram</h4>
                      <p>Puducherry</p>
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
     
              
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
