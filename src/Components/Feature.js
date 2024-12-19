/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Feature() {
  return (
    <div>    
      {/* Features Section */}
      <section className="section features" id="features" aria-label="features">
        <div className="container">

          <p className="section-subtitle text-center">- Why Choose Us -</p>

          <h2 className="h2 section-title text-center">Why Choose Infiedge?</h2>

          <p className="section-text text-center">
            Expertise that inspires, tailored solutions, and innovation at the core — discover the Infiedge difference.
          </p>

          <ul className="grid-list">

            <li>
              <div className="features-card">

                <data className="card-number" value="01">01</data>

                <h3 className="h3 card-title">EXPERTISE THAT INSPIRES</h3>

                <p className="card-text">
                  Our team brings a wealth of knowledge and creativity to every project.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="02">02</data>

                <h3 className="h3 card-title">TAILORED SOLUTIONS</h3>

                <p className="card-text">
                  We adapt to your unique challenges and goals.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="03">03</data>

                <h3 className="h3 card-title">INNOVATION AT THE CORE</h3>

                <p className="card-text">
                  We thrive on solving problems with cutting-edge technology.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="04">04</data>

                <h3 className="h3 card-title">CLIENT-FIRST APPROACH</h3>

                <p className="card-text">
                  Your success is our ultimate measure of achievement.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="05">05</data>

                <h3 className="h3 card-title">PROVEN SUCCESS</h3>

                <p className="card-text">
                  Delivering excellence through results-driven solutions.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
}
