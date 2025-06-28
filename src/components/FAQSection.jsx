import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.faqBox}>
      <div style={styles.questionBox} onClick={() => setOpen(!open)}>
        <span style={styles.question}>{question}</span>
        <span style={styles.plusIcon}>{open ? '−' : '+'}</span>
      </div>
      {open && <div style={styles.answer}>{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'When And Where Is The Workshop And How Long Would It Be?',
      answer:
        'The workshop will be for 2 hours and will be on the Zoom App. Please check the top section of this page to get your preferred date for the workshop.'
    },
    {
      question: 'What If I Fail To Register Before All The Spots Are Taken?',
      answer:
        'If all spots are taken, unfortunately, we won’t be able to accommodate you, and you’ll miss out on bonuses worth ₹15,000. We can’t guarantee the discounted price will be available next time, so it’s best to register soon to secure your spot and bonuses.'
    },
    {
      question: 'What Is A Digital Product And How Will This Workshop Help Me Build A Digital Business?',
      answer:
        'Digital products include items like ebooks, templates, bundles, and courses. Our workshop will teach you how to create and sell these products, giving you the knowledge to start your own digital product-selling business with AI and Automation.'
    },
    {
      question: 'How Do I Join The Workshop?',
      answer:
        'After registering, you’ll be added to a WhatsApp group where you’ll receive the Zoom link to join the workshop an hour before it starts. You’ll also receive emails with further information and bonuses instantly after registering.'
    }
  ];

  return (
    <div style={styles.fullBackground}>
      {/* Wiggle keyframes */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          15% { transform: translateX(-3px); }
          30% { transform: translateX(3px); }
          45% { transform: translateX(-3px); }
          60% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(0); }
        }

        .wiggle-button {
          animation: wiggle 1.2s ease-in-out infinite;
          background-color: rgb(228, 166, 76);
          padding: 20px 30px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 0 6px #ccc;
          margin-bottom: 20px;
          cursor: pointer;
          width: auto;
        }

        @media (max-width: 768px) {
          .wiggle-button {
            font-size: 16px;
            padding: 16px 20px;
            width: 100%;
            max-width: 340px;
          }
        }
      `}</style>

      <div style={styles.container}>
        <h2 style={styles.heading}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}

        {/* Centered Wiggle Button */}
        <div style={{ display: 'flex', justifyContent: 'center',  }}>
          <button className="wiggle-button">
            Yes, I Want To Earn More Than A Full-Time Professional
            <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
              Join the workshop Now at just Rs 47
            </div>
          </button>
        </div>

        <p style={{ fontSize: '16px', color: '#fff', textAlign: 'center' }}>
          Register before <span style={{ color: '#F4A940' }}>26, June</span> to unlock bonuses worth <span style={{ color: '#F4A940' }}>Rs 15,000</span>
        </p>
        <p style={{ fontSize: '14px', color: '#aaa', textAlign: 'center' }}>⭐⭐⭐⭐⭐ RATED 4.7 OUT OF 5</p>
      </div>
    </div>
  );
};

const styles = {
  fullBackground: {
    backgroundColor: '#0f0f0f',
    minHeight: '100vh',
    width: '100%',
    padding: '60px 20px',
    boxSizing: 'border-box',
    
  },
  container: {
    color: '#fff',
    fontFamily: 'sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
   
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '40px'
  },
  faqBox: {
    border: '1px solid orange',
    borderRadius: '10px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  questionBox: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    fontSize: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  question: {
    color: '#ffffff'
  },
  plusIcon: {
    fontSize: '24px',
    color: '#ccc'
  },
  answer: {
    backgroundColor: '#121212',
    padding: '20px',
    fontSize: '16px',
    color: '#fff'
  }
};

export default FAQSection;
