import React from 'react';

const RegisterBanner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'linear-gradient(to right, #fbc087, #e4a55f)',
      padding: '10px 40px',
      borderRadius: '8px',
    }}>
      <h3 style={{
        color: '#000',
        fontWeight: 'bold',
        fontSize: '18px',
        margin: 0,
      }}>
        Register Only If You are Serious about starting your Highly Profitable Online Business in 2025
      </h3>
      <button style={{
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
      }}>
        Register Now
      </button>
    </div>
  );
};

export default RegisterBanner;
