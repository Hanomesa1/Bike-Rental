import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/han1.jpg";
import Person2 from "../images/team/han2.jpg";
import Person3 from "../images/team/han3.jpg";
import Person4 from "../images/team/han5.jpg";
import Person5 from "../images/team/han4.jpg";
import Person6 from "../images/team/han6.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Tiger Miller", job: "Salesman" },
    { img: Person2, name: "Michael Mesa", job: "Business Owner" },
    { img: Person3, name: "Koby clair", job: "Photographer" },
    { img: Person4, name: "Antonio", job: "Bike Detailist" },
    { img: Person5, name: "Martin Luther", job: "Mechanic" },
    { img: Person6, name: "Francis Coullot", job: "Manager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a bike by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 1234-123456</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
