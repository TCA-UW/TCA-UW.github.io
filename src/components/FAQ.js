import React, { useState } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqData = [
    {
      question: "What is TCA and what makes us unique?",
      answer: "TCA (Technology Consulting Association) is the University of Washington's premier student-run technology consultancy. We're the only RSO on campus that bridges the gap between business and technology, offering specialized solutions in software development, data analysis, cloud computing, and digital transformation. Our unique approach combines technical expertise with strategic business thinking, providing real-world consulting experience while helping companies solve complex technology challenges."
    },
    {
      question: "How can I join TCA?",
      answer: "TCA recruits new members every quarter! We welcome applications from students across all majors who are passionate about technology and consulting. Visit our 'Join' page for detailed information about our application process, requirements, and upcoming recruitment cycles. We typically look for students who demonstrate strong problem-solving skills, teamwork, and a genuine interest in technology consulting."
    },
    {
      question: "What majors and backgrounds do you accept?",
      answer: "We welcome students from ALL majors! While we're affiliated with the Paul G. Allen School of Computer Science and Engineering, TCA values diversity in perspectives and skills. Our organization has both technical and business teams, so whether you're studying computer science, business, engineering, design, or any other field, there's a place for you. We believe diverse teams create better solutions."
    },
    {
      question: "Do I need coding experience to join?",
      answer: "Not necessarily! While our tech team requires some programming background (CSE coursework above CSE 122 or placement into CSE 123), our business team welcomes students from all backgrounds. We also offer regular workshops covering industry-level concepts including system design, database management, stakeholder analysis, and more. If you're passionate about technology and eager to learn, we'd love to have you!"
    },
    {
      question: "What's the time commitment?",
      answer: "TCA is a significant but rewarding commitment. Members typically spend 5-6 hours per week on activities including weekly meetings, client projects, workshops, and team collaboration. We understand the importance of academic success and work to create a flexible, supportive environment. The networking opportunities, industry experience, and professional development you'll gain make this investment in your future career well worth it."
    },
    {
      question: "What types of projects do you work on?",
      answer: "Our projects span various industries and technologies. We've worked on web applications, data analytics solutions, cloud infrastructure, mobile apps, and digital transformation initiatives. Projects range from startups looking to scale their technology to established companies seeking to modernize their systems. Each project provides hands-on experience with real clients, industry-standard tools, and professional development opportunities."
    },
    {
      question: "What skills will I develop?",
      answer: "TCA members develop both technical and soft skills essential for consulting careers. Technical skills include software development, data analysis, cloud computing, system design, and project management. Soft skills include client communication, presentation abilities, teamwork, problem-solving, and strategic thinking. You'll also gain experience with industry tools, methodologies, and best practices used by top consulting firms."
    },
    {
      question: "How does TCA differ from other consulting clubs?",
      answer: "TCA is unique as the only RSO on campus offering technology-focused consulting services. While other consulting clubs focus on business strategy, we specialize in technology solutions and digital transformation. Our members work directly with clients on technical projects, gaining hands-on experience with cutting-edge technologies. This technical focus sets us apart and prepares members for careers in tech consulting, product management, and technology leadership roles."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
      <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about TCA</p>
      </div>
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
  );
};

export default FAQ;
