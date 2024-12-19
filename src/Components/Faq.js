import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the benefits of using your product/services?",
      answer: "Our IT solutions enhance productivity and streamline business operations by leveraging cutting-edge technology. They reduce costs, improve security, and ensure a competitive, secure, and efficient environment. Our proactive approach prevents issues, ensuring minimal downtime and a reliable infrastructure."
    },
    {
      question: "How do I know which IT service is right for my business?",
      answer: "Infiedge offers unique IT solutions through comprehensive consultations, ensuring alignment with your organization's goals, challenges, and technology landscape. They provide tailored strategies for cloud computing, cybersecurity, and network management. Infiedge's flexible approach allows for adaptability to industry trends, ensuring smooth implementation and alignment with objectives. Their team is committed to supporting your business every step of the way, making them your technology partner."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Infiedge provides 24/7 technical support for businesses in an always-on environment, ensuring system uptime and smooth operations. Our dedicated team proactively monitors and resolves issues, ensuring systems are restored to full functionality and minimizing downtime, allowing businesses to operate seamlessly."
    },
    {
      question: "What makes your company different from other IT service providers?",
      answer: "Infiedge offers personalized, client-centered service that goes beyond problem-solving. They understand your unique needs and culture, tailoring solutions to your unique needs. They focus on a holistic, proactive approach, continuously monitoring and optimizing your IT infrastructure to ensure peak performance and long-term success. Their unwavering commitment to client satisfaction ensures your IT infrastructure is in expert hands."
    },
    {
      question: "What is the estimated timeline for completing my IT project?",
      answer: "Infiedge provides a realistic understanding of the project timeline, considering the specific requirements of each project. They assess the project's complexity, scale, and technical challenges, ensuring a tailored plan with specific milestones and deliverables. They maintain transparent communication, adapt to unforeseen obstacles, and strike a balance between meeting deadlines and delivering high-quality results, ensuring smooth execution and satisfaction."
    }
  ];

  return (
    <div>
      <section className="faq section" id="faq" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Discover Frequently Asked Questions?</h2>
          </div>

          <ul className="grid-list">
            {faqData.map((faq, index) => (
              <li key={index}>
                <div className="faq-card">
                  <button 
                    className={`card-action ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAnswer(index)}
                  >
                    <h3 className="h3 card-title">{index + 1}. {faq.question}</h3>
                    <div className="action-icon">
                      <ion-icon 
                        name="add-outline" 
                        aria-hidden="true" 
                        className={`open ${activeIndex === index ? 'hide' : ''}`}
                      ></ion-icon>
                      <ion-icon 
                        name="remove-outline" 
                        aria-hidden="true" 
                        className={`close ${activeIndex === index ? 'show' : 'hide'}`}
                      ></ion-icon>
                    </div>
                  </button>

                  <div 
                    className={`card-content ${activeIndex === index ? 'active' : ''}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
