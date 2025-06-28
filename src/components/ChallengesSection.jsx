import React from 'react';

const challenges = [
  "I don’t know what Digital product to create or how to begin.",
  "I’m too busy to figure this business out on my own.",
  "I’m not good with tech and online tools.",
  "I don’t have an audience or people to sell to.",
  "I’ve tried before and nothing really worked.",
  "I want to earn more but can’t risk quitting my job.",
];

const ChallengesSection = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .challenge-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 600 }}>
          If You’re Facing These Challenges <span style={{ color: '#DEA15B' }}>then</span><br />
          <span style={{ color: '#DEA15B' }}>Tick the Box Below…</span>
        </h2>

        <div
          className="challenge-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {challenges.map((text, index) => (
            <label key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: '#1A1A1A',
              borderRadius: '10px',
              padding: '16px 20px',
              fontSize: '16px',
              border: '1px solid #333',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: '#57B9FF',
                  cursor: 'pointer'
                }}
              />
              {text}
            </label>
          ))}
        </div>

        <p style={{
          marginTop: '40px',
          fontSize: '18px',
          color: '#fff',
          fontWeight: 500
        }}>
          But If You Want To Overcome These Challenges And Get A Proven Roadmap To Launch And Scale <br />
          Your Successful Online Business (<strong>DIGITAL PRODUCT BIZ</strong>) From Scratch…
        </p>
      </div>
    </>
  );
};

export default ChallengesSection;
