import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import workshopImage from '../Assest/21.webp'; // Replace with your actual image path

const WorkshopBanner = () => {
  return (
    <div style={{ backgroundColor: '#121212', padding: '2px 20px' }}>
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
          .cta-container {
            text-align: center;
          }
        }
      `}</style>

      {/* Centered Heading */}
      <h2
        style={{
          fontSize: '26px',
          color: '#E49C47',
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        Then I Invite You To My Upcoming
      </h2>

      {/* Inner container */}
      <div
        style={{
          borderRadius: '12px',
          border: '1px solid #E49C47',
          maxWidth: '850px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '40px 20px',
          backgroundColor: '#121212',
        }}
      >
        {/* Heading */}
        <div
          style={{
            display: 'inline-block',
            background: '#E49C47',
            color: '#000',
            fontWeight: 'bold',
            padding: '10px 30px',
            fontSize: '24px',
            clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
          }}
        >
          Digital Product Machine Workshop
        </div>

        {/* Image */}
        <div style={{ marginTop: '40px' }}>
          <img
            src={workshopImage}
            alt="Workshop Preview"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
            }}
          />

          {/* Description */}
          <div
            style={{
              marginTop: '40px',
              color: '#bbb',
              fontSize: '18px',
              lineHeight: '1.6',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            <p>
              Here, I Will Teach You The{' '}
              <strong style={{ color: '#fff' }}>Step-By-Step Process</strong>{' '}
              <span style={{ color: '#888' }}>
                Of Creating And Selling Digital Products Using
                <br />
                AI, How To Identify Your{' '}
                <span style={{ textDecoration: 'underline', color: '#fff' }}>
                  Target Audience, Effective Marketing Strategies, And Much More
                </span>
                , All
                <br />
                Aimed At Helping You
              </span>{' '}
              <strong style={{ color: '#888' }}>
                Build And Automate A Profitable Online Business.
              </strong>
            </p>

            {/* Features Grid */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
                marginTop: '30px',
              }}
            >
              <div style={{ textAlign: 'left', minWidth: '250px' }}>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>Quick, Systematic, And Authentic Way</strong></p>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>Free Bonuses</strong></p>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>From Scratch To Multi-Fig Biz Roadmap</strong></p>
              </div>

              <div style={{ textAlign: 'left', minWidth: '250px' }}>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>Hands-On Learning</strong></p>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>1000s Of Success Stories</strong></p>
                <p style={checkStyle}><FaCheckCircle /> <strong style={{ color: '#FFFFFFD1' }}>Launch Your Digital Product Business</strong></p>
              </div>
            </div>

            {/* Final Heading */}
            <h3
              style={{
                color: '#fff',
                marginTop: '40px',
                fontSize: '24px',
                fontWeight: '700',
              }}
            >
              Discover The Secrets To Launching Your{' '}
              <span style={{ color: '#DEA15B' }}>
                Successful Digital Product Business
              </span>
              <br />
              From The Comfort Of Your Home!
            </h3>
          </div>
        </div>
      </div>

      {/* ==== Call to Action Banner and Bonus Info OUTSIDE ==== */}
      <div
        className="cta-container"
        style={{ backgroundColor: '#121212', padding: '30px 20px', textAlign: 'center' }}
      >
        {/* Wiggle Button */}
        <button className="wiggle-button">
          Yes, I Want To Earn More Than A Full-Time Professional
          <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
            Join the workshop Now at just Rs 47
          </div>
        </button>

        <p style={{ fontSize: '16px', color: '#fff' }}>
          Register before <span style={{ color: '#F4A940' }}>26, June</span> to unlock bonuses worth{' '}
          <span style={{ color: '#F4A940' }}>Rs 15,000</span>
        </p>
        <p style={{ fontSize: '14px', color: '#aaa' }}>⭐⭐⭐⭐⭐ RATED 4.7 OUT OF 5</p>
      </div>
    </div>
  );
};

const checkStyle = {
  color: '#00FF57',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: '500',
  fontSize: '16px',
  marginBottom: '12px',
};

export default WorkshopBanner;
