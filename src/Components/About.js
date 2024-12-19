import React from 'react';
import banner from './assets/images/about-banner.png';

export default function About() {
  return (
    <div>    
      {/* About Section */}
      <section className="about section" id="about" aria-label="about">
        <div className="container">

          <figure className="about-banner">
            <img 
              src={banner} 
              width="802" height="654" 
              loading="lazy" 
              alt="about banner"
              className="w-100"
            />
          </figure>

          <div className="about-content">

            <h2 className="h2-sm section-title">
              Your vision, our dedication. Together, let’s redefine possibilities.
            </h2>

            <p className="section-text">
              Infiedge was born out of a passion for innovation, excellence, and building lasting partnerships. As a team of seasoned professionals, we deliver customized solutions that empower businesses to thrive in a competitive landscape.
              standard dummy text ever.
            </p>

            <ul className="about-list">

              <li className="has-before">
                Innovation: Staying ahead with cutting-edge technology and ideas.
              </li>

              <li className="has-before">
                Dedication: Delivering unparalleled quality and client satisfaction.
              </li>

              <li className="has-before">
                 Collaboration: Building lasting relationships through transparency and trust.
              </li>

            </ul>

            <div className="btn-group">
              {/* <a href="#" className="btn btn-primary">Know More</a> */}

              {/* <button className="flex-btn">
                <div className="btn-icon">
                  <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
                </div>

                <span className="span">10+ Years Experience</span>
              </button> */}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
