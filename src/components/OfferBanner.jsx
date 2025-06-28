import React from 'react';

const OfferBanner = () => {
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
          .offer-container {
            flex-direction: column !important;
            text-align: center;
            padding: 15px 20px !important;
          }
          .offer-left, .offer-right {
            margin: 0 !important;
          }
          .offer-button {
            width: 100% !important;
            margin-top: 10px;
          }
        }
      `}</style>

      <div
        className="offer-container"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2A2A2A',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 40px',
          borderTop: '2px solid #DEA15B',
          boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.4)',
          zIndex: 9999,
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side */}
        <div className="offer-left" style={{ marginLeft: '10%' }}>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#fff' }}>
            Rs.47/-{' '}
            <span style={{ color: 'red', textDecoration: 'line-through', fontSize: '20px' }}>
              199/-
            </span>
          </div>
          <div style={{ fontSize: '16px', color: '#fff', marginTop: '4px' }}>
            Recently Registered by{' '}
            <span style={{ color: '#FFA94D', fontWeight: '600' }}>Harshita from Jaipur</span>
          </div>
        </div>

        {/* Right Side with Link */}
        <div className="offer-right" style={{ marginRight: '10%' }}>
          <a
            href="https://skillxschool.com/checkout-woo-2/" // 🔁 Replace this with your actual registration URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              className="wiggle-button offer-button"
              style={{
                background: 'linear-gradient(60deg, #DEA15B, #ffd58e, #DEA15B)',
                color: '#000',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '180px',
              }}
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
