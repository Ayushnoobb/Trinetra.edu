import React from "react";

// import usa from "../img/country-opprtunity/usa.jpg";
import canada from "../img/country-opprtunity/canada.jpeg";
import newZealand from "../img/country-opprtunity/newzealand.jpg";
import australia from "../img/country-opprtunity/australia.jpeg";
import korea from "../img/country-opprtunity/korea.jpeg";
import uk from "../img/country-opprtunity/uk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Opportunity() {
  AOS.init();
  return (
    <>
        <div className="container">
          <div className="media-container-row">
            <div className="title ">
              <h2
                className="align-center pb-1 mbr-fonts-style display-5 text-center"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center"
              >
                COULD YOUR NEXT UNIVERSITY BE IN
              </h2>
              <h3
                className="text-center display-7"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center"
              >
                THE BENCHMARK FOR ABROAD STUDIES ?
              </h3>
            </div>
          </div>
          <div className="mbr-section article">
            <div className="media-container-row">
              <ul
                className="opportunity-list"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center"
              >
                <li className="opportunity-country">
                  <figure className="figure">
                    <img
                      src="https://lh3.googleusercontent.com/gmtz4HFyfKjW7jCaneazaE31F_pOuarxh9TBXAM3CK643vGGNdcNNX4rgF2v8iDll-qa8MB61lHd1h5YvZZuP7K9yuAwHAH_GYE8IlSDyto2HhBCh2kszNRV4bsMqGRcH0jXsC7XFg=w2400"
                      className="fig-img"
                      height={200}
                      alt="usa"
                    />
                    <figcaption className="figure-caption">
                      Study in USA
                    </figcaption>
                  </figure>
                </li>
                {/* 2 */}
                <li className="opportunity-country">
                  <figure className="figure">
                    <img
                      src={canada}
                      className="fig-img"
                      height={200}
                      alt="canda"
                    />
                    <figcaption className="figure-caption">
                      Study in Canada
                    </figcaption>
                  </figure>
                </li>
                {/* 3 */}
                <li className="opportunity-country">
                  <figure className="figure">
                    <img
                      src={australia}
                      className="fig-img"
                      height={200}
                      alt="australia"
                    />
                    <figcaption className="figure-caption">
                      Study in Australia
                    </figcaption>
                  </figure>
                </li>
                {/* 4 */}
                <li className="opportunity-country">
                  <figure className="figure">
                    <img
                      src={newZealand}
                      className="fig-img"
                      height={200}
                      alt="newZealand"
                    />
                    <figcaption className="figure-caption">
                      Study in NewZealand
                    </figcaption>
                  </figure>
                </li>
                {/* 5 */}
                <li className="opportunity-country">
                  <figure className="figure">
                    <img src={uk} className="fig-img" height={200} alt="U.K" />
                    <figcaption className="figure-caption">
                      Study in England
                    </figcaption>
                  </figure>
                </li>
                {/* 6 */}
                <li className="opportunity-country">
                  <figure className="figure">
                    <img
                      src={korea}
                      className="fig-img"
                      height={200}
                      alt="korea"
                    />
                    <figcaption className="figure-caption">
                      Study in Korea
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default Opportunity;
