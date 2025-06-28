import React from 'react';

// Benefit Images
import benefit1 from '../Assest/img12.webp';
import benefit2 from '../Assest/img15.webp';
import benefit3 from '../Assest/img13.webp';
import benefit4 from '../Assest/img16.webp';
import benefit5 from '../Assest/img14.webp';
import benefit6 from '../Assest/img17.webp';

// Testimonial Images
import review1 from '../Assest/Screenshot_30.webp';
import review2 from '../Assest/Screenshot_31.webp';
import review3 from '../Assest/Screenshot_29.webp';
import review4 from '../Assest/Screenshot_32.webp';

const benefits = [
  {
    title: 'Effortlessly Create Digital Products with AI:',
    description: (
      <>
        Develop <u>ebooks</u>, <u>reports</u>, <u>lead magnets</u>, and other{' '}
        <u>digital products</u> quickly and easily, without any prior experience or technical skills.
      </>
    ),
    image: benefit1
  },
  {
    title: 'Generate Leads and Sales:',
    description: (
      <>
        Implement <u>effective marketing strategies</u> to attract and convert leads into sales,
        maximizing your profits.
      </>
    ),
    image: benefit2
  },
  {
    title: 'Launch and Scale Your Online Business:',
    description: (
      <>
        Set up and grow your digital product business using AI Automation And without ads,
        ensuring <u>long-term success and scalability</u>.
      </>
    ),
    image: benefit3
  },
  {
    title: 'Earn Passive Income:',
    description: (
      <>
        Create a steady stream of passive income by selling digital products online, providing you
        with <u>financial freedom and security</u>.
      </>
    ),
    image: benefit4
  },
  {
    title: 'Work from Anywhere:',
    description: (
      <>
        Enjoy the flexibility of running your business from anywhere, without the need for an
        office, <u>employees, or expensive tools</u>.
      </>
    ),
    image: benefit5
  },
  {
    title: 'Gain Confidence and Support:',
    description: (
      <>
        Overcome doubts and challenges with step-by-step guidance and access to a supportive
        community of <u>like-minded individuals</u>.
      </>
    ),
    image: benefit6
  }
];

const testimonials = [review1, review2, review3, review4];

const checklistItems = [
  "No Technical Skills or Experience Required",
  "Make Passive Income And Passive Profit",
  "Freedom of Time & Money",
  "Step-By-Step Guidance",
  "Access To Expert Insights",
  "Live Q&A"
];

const boldKeywords = (text) => {
  return text.replace(
    /(Technical Skills|Experience|Passive Income|Passive Profit|Time & Money|Step-By-Step|Expert Insights|Q&A)/gi,
    (match) => `<strong>${match}</strong>`
  );
};

const BenefitsAndTestimonials = () => {
  return (
    <>
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
        }

        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .checklist-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonial-img {
            width: 100% !important;
            max-width: 280px !important;
          }
          .cta-btn {
            font-size: 16px !important;
            padding: 12px 20px !important;
          }
          .heading {
            font-size: 24px !important;
          }
        }
      `}</style>

      {/* BENEFITS SECTION */}
      <div style={styles.section}>
        <h2 className="heading" style={styles.heading}>
          After Attending The{' '}
          <span style={{ color: '#DEA15B' }}>Digital Product Machine Workshop</span>
          <br />
          You Will Be Able To...
        </h2>

        <div className="benefits-grid" style={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} style={styles.card}>
              <img src={benefit.image} alt={benefit.title} style={styles.image} />
              <div>
                <h3 style={styles.title}>{benefit.title}</h3>
                <p style={styles.description}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div style={styles.testimonialSection}>
        <h2 style={styles.testimonialHeading}>
          Don’t Just Take My Words For It
          <br />
          <span style={{ color: '#ccc', fontWeight: 'normal' }}>
            Have A Look At What My Previous Students Have To Say
          </span>
        </h2>

        <div style={styles.testimonialGrid}>
          {testimonials.map((img, i) => (
            <img key={i} src={img} alt={`Testimonial ${i + 1}`} className="testimonial-img" style={styles.testimonialCard} />
          ))}
        </div>

        {/* ✅ Wiggle CTA Button */}
        <button className="cta-btn wiggle-button" style={styles.ctaBtn}>
          Yes, I Want To Earn More Than A Full-Time Professional
          <div style={{ fontSize: '16px', fontWeight: 'normal' }}>
            Join the workshop Now at just Rs 47
          </div>
        </button>

        <div style={styles.bottomLine}>
          Register before <span style={{ color: '#DEA15B' }}>27, June</span> to unlock bonuses worth{' '}
          <span style={{ color: '#DEA15B' }}>Rs 15,000</span>
          <br />
          ⭐⭐⭐⭐☆ RATED 4.7 OUT OF 5
        </div>
      </div>

      {/* CHECKLIST SECTION */}
      <div style={styles.checklistSection}>
        <div className="checklist-grid" style={styles.checklistGrid}>
          {checklistItems.map((item, index) => (
            <div key={index} style={styles.checklistItem}>
              ✅ <span dangerouslySetInnerHTML={{ __html: boldKeywords(item) }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  section: {
    backgroundColor: '#000',
    padding: '60px 20px',
    color: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    lineHeight: '1.4'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    maxWidth: '950px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    textAlign: 'left'
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    flexShrink: 0
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '8px'
  },
  description: {
    fontSize: '15px',
    color: '#ccc'
  },
  testimonialSection: {
    backgroundColor: '#000',
    padding: '60px 20px',
    textAlign: 'center',
    color: '#fff'
  },
  testimonialHeading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  testimonialGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px'
  },
  testimonialCard: {
    width: '220px',
    borderRadius: '15px',
    boxShadow: '5px 5px 0 #DEA15B'
  },
  ctaBtn: {
    backgroundColor: 'rgb(228, 166, 76)',
    padding: '20px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 6px #ccc',
  },
  bottomLine: {
    fontSize: '16px',
    color: '#fff',
    fontWeight: '500'
  },
  checklistSection: {
    backgroundColor: '#000',
    padding: '40px 20px',
    color: '#fff',
  },
  checklistGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    maxWidth: '950px',
    margin: '0 auto'
  },
  checklistItem: {
    backgroundColor: '#1a1a1a',
    padding: '14px 20px',
    borderRadius: '10px',
    fontSize: '16px',
    border: '1px solid #333',
    boxShadow: 'inset 0 0 0 1px #444',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    gap: '10px'
  }
};

export default BenefitsAndTestimonials;
