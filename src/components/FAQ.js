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
      answer: "TCA is the University of Washington's premier student-run technology consultancy. \
              We offer a variety of services tailored at helping companies solve their problems \
              using technologies and help students foster the consulting skills they need to \
              succeed in the industry."
    },
    {
      question: "How can I become a member?",
      answer: "TCA accepts a new cohort every quarter. Check out the 'Join' page for more information!"
    },
    
    {
      question: "What majors does TCA accept?",
      answer: "While we are in the process of getting affiliated with the Paul G. Allen School of Computer Science\
              and Engineering, we hire members across every major! TCA has both a tech team and a business teams,\
              so as long as you're interested in joining one of these groups, we highly encourage you to apply!"
    },
    {
      question: "What's the difference between TCA and UW's other consulting RSOs?",
      answer: "TCA is completely unique in that we are the only RSO offering tech consulting services on \
              campus. We aim to bridge the gap between business and technology by providing specialized solutions \
              in areas such as software development, data analysis, cloud computing, and more. Unlike other consulting RSOs, \
              TCA focuses exclusively on technology-driven strategies, empowering student-led projects and providing hands-on \
              experience for members working directly with clients."
    },
    {
      question: "Do I need to know how to code in order to become a member?",
      answer: "Not at all! TCA has both a tech team and a business team, so we accept members from both technical \
               and non-technical backgrounds. We only ask that members applying to the tech team have either taken CSE coursework \
               above CSE 122 or have taken and have placed into CSE 123 on the Allen School self-guided 12x placement exam. We will also \
               have regular workshops where we will cover industry-level CS and business concepts including system design, database management, \
               stakeholder analysis, and more!"
    },
    {
      question: "What's the time commitment like for this RSO?",
      answer: "TCA is a big time commitment, and we estimate that members will spend 5-6 hours each week through weekly meetings, \
               client engagements, workshops, and more. That being said, we strive to create a flexible and supportive \
               environment, allowing members to balance their involvement in TCA with their academic and personal \
               commitments. We strongly believe that the networking opportunities, industry experience, and learning opportunities \
               this RSO provides will make the time commitment well worth the effort."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
