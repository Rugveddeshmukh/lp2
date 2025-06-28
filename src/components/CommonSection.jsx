import React from 'react';
import { FaTimes } from 'react-icons/fa';
import challengeImage from '../Assest/painting.webp';

const challenges = [
  'Don’t <strong>Know</strong> What Business To Start, What To Sell, And Whom To Sell',
  'Don’t <strong>Have</strong> Any Authentic <u>Products Or Services</u> To Sell',
  'Don’t <strong>Know</strong> Who Is Your <u>Ideal Customer</u> And How To <u>Reach Them</u> Effectively',
  'Have <strong>No Understanding</strong> Of The Market And No <u>Proper Research</u>',
  '<strong>Limited Funds</strong> Can Make It Difficult To <u>Start</u> Or <u>Grow</u> A Business',
  'Don’t know how to market and sell your products in the real world',
  'Fear of failure, doubts, etc.'
];

const ChallengeSection = () => {
  return (
    <div style={{ background: '#121212', color: '#fff', fontFamily: 'Outfit, sans-serif', padding: '30px 20px' }}>
      {/* Top Heading */}
      <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '10px', color: '#E49C47' }}>
        Do You Find It Challenging
      </h2>
      <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: '#dddddd' }}>
        To Start A Genuine Online Business That Makes You <br /> Consistent Income $$$ — Every Single Month?
      </h3>
      <p style={{ textAlign: 'center', fontSize: '16px', color: '#fff', marginBottom: '40px' }}>
        If <span style={{ color: '#E49C47', fontWeight: 'bold' }}>YES</span>, Then You’re Not Alone. Many People Fails To{' '}
        <u>Make Money Online, Generate Leads, Sales & Grow</u> <br /> Their Business!
      </p>

      {/* Flex Layout */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Left Image */}
        <div style={{ flex: '1 1 300px', maxWidth: '270px', marginTop: '15px' }}>
          <img
            src={challengeImage}
            alt="Challenging Situation"
            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Text Content */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <h3 style={{ fontSize: '32px', marginBottom: '20px', color: '#fff', fontWeight: '200' }}>
            Here Are The Most Common Challenges <br />
            <div style={{ textAlign: 'center', fontWeight: '200' }}>
              <span>People Face:</span>
            </div>
          </h3>

          {challenges.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
              <FaTimes size={20} color="#FF3C3C" style={{ marginTop: 4 }} />
              <p
                style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call-to-Action Section */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', color: '#cccccc', marginBottom: '10px' }}>
          But If You Want To Overcome These <span style={{ color: '#FFF' }}>Challenges And Get A Proven Roadmap</span> To Launch And Scale <br />
          Your Successful Online Business (<span style={{ color: '#E49C47' }}>DIGITAL PRODUCT BIZ</span>) From Scratch...
        </p>
      </div>
    </div>
  );
};

export default ChallengeSection;
