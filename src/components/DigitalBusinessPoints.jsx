import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import rightImage from '../Assest/img56.webp';

const points = [
  {
    text: (
      <>
        How<strong style={{ color: '#E49C47' }}> Digital Product Business Works</strong> And How You Can Start Selling Your{' '}
        <br /><u>Own Digital Products In Just 30 Minute Using AI And Make Insane Profits</u><br />~ Without Owning It!
      </>
    ),
  },
  {
    text: (
      <>
        How You Can Create Your <strong style={{ color: '#E49C47' }}>Own Digital Product</strong> In A{' '}
        <u>Few Minutes And Sell</u> <br />It To The Masses (Earning More Than A Full-Time Job Person)
      </>
    ),
  },
  {
    text: (
      <>
        <strong style={{ color: '#E49C47' }}>Systems And Processes</strong> You Need To{' '}
        <u>Launch And Scale</u> Your Successful<br /> Digital Product Business
      </>
    ),
  },
  {
    text: (
      <>
        <strong style={{ color: '#E49C47' }}>Proven Plan And Framework</strong> To Set Up Your Own{' '}
        <u>Digital Product<br /> Business From Home</u>
      </>
    ),
  },
  {
    text: (
      <>
        You <strong style={{ color: '#E49C47' }}>Don’t Need A Heavy Investment</strong>, Manpower, Office Or Any Product<br /> To Get Started
      </>
    ),
  },
  {
    text: (
      <>
        How to <strong style={{ color: '#E49C47' }}>generate leads and sales</strong> on your digital product so you’re<br /> never short of customers ready to buy your product
      </>
    ),
  },
];

const DigitalBusinessPoints = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div style={{ background: '#0B0B0B', color: '#fff', fontFamily: 'Outfit, sans-serif', padding: '30px 15px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '25px' }}>
        Here Is What You Are Going To <span style={{ color: '#E49C47' }}>Learn Inside The Workshop</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* Left - Bullet Points */}
        <div style={{ flex: '1 1 450px', maxWidth: '600px' }}>
          {points.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#1A1A1A',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                border: '1px solid #333',
                fontSize: '15px',
                lineHeight: '1.5',
              }}
            >
              <FaCheckCircle color="#F4A940" size={18} style={{ marginTop: 4 }} />
              <div>{item.text}</div>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div style={{ flex: '1 1 250px', maxWidth: '350px' }}>
          <img
            src={rightImage}
            alt="Workshop Host"
            style={{
              width: isMobile ? '100%' : '80%',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              height: isMobile ? 'auto' : '90%',
              marginTop: isMobile ? '10px' : '20px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalBusinessPoints;
