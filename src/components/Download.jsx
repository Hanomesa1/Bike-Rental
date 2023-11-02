import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our Bike Rental app to get most out of it</h2>
            <p>
              🌐 Join the Motorcycle Revolution Today! 🌐
              <br></br>
              <br></br>
              Unleash the adventurer within you, embrace the thrill of the open
              road, and make memories that last a lifetime. Download our
              Motorbike Rental App now and unlock the freedom to explore the
              world on two wheels!
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
