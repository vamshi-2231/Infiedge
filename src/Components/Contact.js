import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm(
        'service_xua115v', // Replace with your Email.js Service ID
        'template_6dmlg2f', // Replace with your Email.js Template ID
        form.current,
        'WXSD6AJ2-sM40FVYZ' // Replace with your Email.js Public Key
      )
      .then(
        (result) => {
          // Show success popup
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for reaching out. We will get back to you shortly.',
            icon: 'success',
            confirmButtonText: 'OK',
            showCloseButton: true,
          });
          console.log(result.text);
        },
        (error) => {
          // Show error popup
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send the message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            showCloseButton: true,
          });
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

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

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input type="text" id="name" name="name" className="contact-form-input" required />
            </div>

            <div className="contact-form-group">
              <label htmlFor="mobile" className="contact-form-label">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="contact-form-input"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number."
                required
              />
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
  );
}
