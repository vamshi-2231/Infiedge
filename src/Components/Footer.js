import React, { useState } from 'react';
import Logo from './assets/images/logo_final4.png';
export default function Footer() {
  // Define the terms of use content and privacy policy content
  const termsOfUseContent = `
    <h2>Terms and Conditions </h2>
    <ol>
      <li><strong>Acceptance of Terms</strong><br />
      By accessing or using our Services, you accept these Terms. We may update them from time to time.</li>

      <li><strong>Services Provided</strong><br />
      We provide software solutions and services to businesses, which may be updated or discontinued at our discretion.</li>

      <li><strong>Account Registration</strong><br />
      You may need to create an account to use certain Services. You are responsible for maintaining the accuracy and confidentiality of your account details.</li>

      <li><strong>User Responsibilities</strong><br />
      You agree to use our Services legally and responsibly. You may not engage in unauthorized use, security breaches, or unlawful activities.</li>

      <li><strong>Intellectual Property</strong><br />
      All content, trademarks, and intellectual property related to our Services are owned by Infiedge Software Pvt Ltd. You may not use them without permission.</li>

      <li><strong>Payment</strong><br />
      If applicable, you agree to pay for the Services as per the agreed pricing. Payments are non-refundable, except as required by law.</li>

      <li><strong>Privacy</strong><br />
      Your use of our Services is governed by our Privacy Policy, which outlines how we handle your personal data.</li>

      <li><strong>Termination</strong><br />
      We may suspend or terminate your access to the Services if you violate these Terms. Upon termination, you must stop using our Services.</li>

      <li><strong>Limitation of Liability</strong><br />
      We are not liable for indirect, incidental, or consequential damages. Our liability is limited to the amount you paid for the Services in the last 12 months.</li>

      <li><strong>Indemnification</strong><br />
      You agree to indemnify us from any claims arising from your use of our Services or violation of these Terms.</li>

      <li><strong>Governing Law</strong><br />
      These Terms are governed by the laws of AndhraPradesh.</li>

      <li><strong>Contact Us</strong><br />
      For questions or concerns, contact us at:  
      <ul>
        <li>Email: Infiedgesoftware@gmail.com</li>
        <li>Phone: +9176708 75823</li>
        <li>Address: Prahaladapuram, Visakhapatnam - 530027</li>
      </ul>
      </li>
    </ol>
  `;

  const privacyPolicyContent = `
    <h2>Privacy Policy</h2>
    <ol>
      <li><strong>Introduction</strong><br />
      We prioritize your privacy and protect your personal data when using our services.</li>

      <li><strong>Information We Collect</strong><br />
      <ul>
        <li>Personal Information: Name, email, phone, payment info.</li>
        <li>Non-Personal Information: IP address, usage data, cookies.</li>
      </ul></li>

      <li><strong>How We Use Your Information</strong><br />
      To provide, improve, and personalize our services, and to communicate with you.</li>

      <li><strong>Data Sharing</strong><br />
      We don’t sell your data but may share it with trusted service providers and for legal purposes.</li>

      <li><strong>Cookies and Tracking</strong><br />
      We use cookies for analytics and functionality. You can control them in your browser.</li>

      <li><strong>Data Security</strong><br />
      We use industry-standard security measures to protect your data, though no online method is fully secure.</li>

      <li><strong>Your Rights</strong><br />
      You can access, update, or delete your data and opt out of marketing emails anytime.</li>

      <li><strong>Data Retention</strong><br />
      We keep your data only as long as necessary for business or legal reasons.</li>

      <li><strong>Third-Party Links</strong><br />
      Our services may link to external sites not covered by this policy. Please review their privacy policies.</li>

      <li><strong>Children’s Privacy</strong><br />
      Our services aren’t intended for children under 13, and we don’t collect their data.</li>

      <li><strong>Changes to This Policy</strong><br />
      We may update this policy and will post changes here. Updates take effect immediately.</li>

      <li><strong>Contact Us</strong><br />
      For any questions, contact us at:  
      <ul>
        <li>Email: Infiedgesoftware@gmail.com</li>
        <li>Phone: +91 76708 75823</li>
        <li>Address: Prahaladapuram, Visakhapatnam - 530027</li>
      </ul>
      </li>
    </ol>
  `;

  // State to manage the modal visibility and content
  const [modalContent, setModalContent] = useState(null);

  // Function to handle closing the modal
  const handleModalClose = () => setModalContent(null);

  // Function to open the modal with the selected content
  const handleModalOpen = (content) => setModalContent(content);

  return (
    <div>
      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
            <button
              onClick={handleModalClose}
              className="modal-close-btn"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              {/* <a href="#" className="logo">INFIEDGE</a> */}
              <a href="#" className="logo">
                          <img 
                            src={Logo} // Replace with the path to your logo image
                            alt="Infiedge Logo" 
                            className="logo-image" 
                            width="155" // Adjust as needed
                            height="auto" 
                          />
                        </a>
              <p className="footer-text">
                INFIEDGE offers innovative digital solutions, including UI/UX design, app development, web solutions, and digital marketing, helping businesses thrive online.
              </p>
            </div>

            <ul className="footer-list">
              <li><p className="footer-list-title">Our Services</p></li>
              <li><a href="#services" className="footer-link">Research & Development</a></li>
              <li><a href="#services" className="footer-link">Web Development</a></li>
              <li><a href="#services" className="footer-link">Digital Marketing</a></li>
              <li><a href="#services" className="footer-link">App Development</a></li>
              <li><a href="#services" className="footer-link">Social Media Management</a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Company</p></li>
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">Company</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#team" className="footer-link"> Team</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Contact Us</p></li>
              <li className="footer-item">
                <ion-icon name="location" aria-hidden="true"></ion-icon>
                <address className="contact-link address">
                  123 Innovation Drive, <br /> Tech City, USA
                </address>
              </li>
              <li className="footer-item">
                <ion-icon name="call" aria-hidden="true"></ion-icon>
                <a href="tel:+917670875823" className="contact-link">+917670875823</a>
              </li>
              <li className="footer-item">
                <ion-icon name="mail" aria-hidden="true"></ion-icon>
                <a href="mailto:infiedgesoftware@gmail.com" className="contact-link">infiedgesoftware@gmail.com</a>
              </li>
              <li className="footer-item">
                <ul className="social-list">
                  <li><a href="https://www.linkedin.com/in/infiedge-software-bab851342/" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                  <li><a href="https://www.instagram.com/infiedge_software/" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                  <li><a href="https://x.com/Infiedge?t=rUcmgIDJ2eQ8UKAcK_ZYVA&s=08" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 | All Rights Reserved by <a href="#" className="copyright-link">INFIEDGE</a>
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a
                  href="#"
                  className="footer-bottom-link"
                  onClick={() => handleModalOpen(termsOfUseContent)}
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-bottom-link"
                  onClick={() => handleModalOpen(privacyPolicyContent)}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
