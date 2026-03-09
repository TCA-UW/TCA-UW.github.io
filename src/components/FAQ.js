import React, { useState } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqData = [
    {
      question: "What is TCA?",
      answer: "TCA (Technology Consulting Association) is UW’s student-run machine learning consulting and development club. We train members through workshops and project-based programs, then apply those skills on real client engagements."
    },
    {
      question: "How do I join?",
      answer: "We recruit on a cycle during the year. Check the Join page for the current application link, deadlines, and what to expect in the process."
    },
    {
      question: "Do I need to be a CS major (or have ML experience) to apply?",
      answer: "No. We welcome students from any major, and prior machine learning experience isn’t required. The biggest thing we look for is genuine interest and the willingness to learn and contribute."
    },
    {
      question: "What’s the difference between Analysts and Developers?",
      answer: "There isn’t a difference during Quarter 1—teams are intentionally cross-functional. If you want to take on more business-heavy work (or more technical work), you can. “Developer” only means you’re designated to implement and ship the solution during Quarter 2."
    },
    {
      question: "What's the time commitment like for TCA?",
      answer: "Members typically spend about 5–7 hours per week across meetings, workshops, and team work. Commitment varies by quarter depending on your project phase and deliverables."
    },
    {
      question: "What programs does TCA offer?",
      answer: "Sandbox covers high-level ML foundations and decision-making: how to choose approaches, explain tradeoffs, and communicate with stakeholders. Nexus is more technical and hands-on, focused on building real ML projects with modern workflows."
    },
    {
      question: "What do engagements look like?",
      answer: "Engagements are client-facing projects where teams scope a problem, propose an approach, and deliver a working solution and/or clear recommendations. You’ll practice both technical execution and consulting-style communication."
    },
    {
      question: "How is TCA different from other consulting clubs?",
      answer: "Our work is ML-first and build-oriented. Instead of focusing only on cases and strategy, we train members to build and deliver real machine learning solutions, then apply that experience on client engagements."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about TCA</p>
      </div>
      
      <div className="faq-section">
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div className={`faq-card ${activeIndex === index ? 'active' : ''}`} key={index}>
              <div className="faq-card-header" onClick={() => handleToggle(index)}>
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-toggle">
                  <span className={`toggle-icon ${activeIndex === index ? 'active' : ''}`}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </div>
              <div className={`faq-card-content ${activeIndex === index ? 'expanded' : ''}`}>
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
