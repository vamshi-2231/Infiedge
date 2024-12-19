import React from 'react'
import banner from './assets/images/hero-banner4.png';

export default function Home() {
  return (
    <div>    {/* <!-- 
        - #HERO
      --> */}
       
  <section className="section hero" id="home" aria-label="hero">
  <div className="container">
    <div className="hero-content">
      
      <p className="hero-subtitle has-before">Welcome to Infiedge</p>
      <h1 className="h1 hero-title">Your Gateway to Digital Excellence!</h1>
      <p className="hero-text">
      Infiedge is a digital company that specializes in transforming visionary ideas into impactful realities through a seamless blend of creativity, technology, and strategic insight. Their solutions address both current demands and anticipate future challenges, ensuring sustainable growth and success. By adopting a holistic approach, they integrate precision, creativity, and measurable results into every project, setting new benchmarks for excellence. Infiedge's work is centered around driving transformative results that inspire and endure, empowering businesses to succeed in the digital era.
      </p>
      {/* <div className="btn-group">
        <a href="#home" className="btn btn-primary">Discover More</a>
      </div> */}
    </div>
    <figure
      className="hero-banner has-before img-holder"
      style={{ "--width": "650px", "--height": "650px" }}
    >
      <img
        src={banner}
        width="650"
        height="650"
        alt="hero banner"
        className="img-cover"
      />
    </figure>
  </div>
</section>

      </div>
  )
}
