import React from 'react'

export default function Contact() {
  return (
    <div>
{/* Contact Section */}
<section className="section contact" id="contact" aria-label="Contact Us">
  <div className="container">
    <div className="title-wrapper text-center">
      <p className="section-subtitle text-center">- Meet the Minds Behind the Magic -</p>
      <h2 className="h2 section-title text-center">Ready to Collaborate?</h2>
      <p className="section-text text-center">
        Ready to transform your vision into reality? Connect with us today!
      </p>
    </div>


          <form action="#" method="post" className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input type="text" id="name" name="name" className="contact-form-input" required />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Mobile</label>
              <input type="email" id="email" name="email" className="contact-form-input" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Email</label>
              <input type="email" id="email" name="email" className="contact-form-input" required />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-form-label">Message</label>
              <textarea id="message" name="message" className="contact-form-input" rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}
