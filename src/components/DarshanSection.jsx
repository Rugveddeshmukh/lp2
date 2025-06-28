import React from 'react';
import workshopImage from '../Assest/Darshan.webp'; 
const DarshanSection = () => {
  return (
    <div style={{ backgroundColor: '#121212', padding: '10px 20px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#0F0F0F',
        borderRadius: '10px',
        border: '1px solid #eaa74b',
        padding: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        {/* Left: Images + List */}
        <div style={{ flex: '1 1 55%', color: '#fff' }}>
          <img src={workshopImage} alt="Workshop" style={{ width: '80%', maxWidth: '350px', marginBottom: '20px' }} />

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              '7+ years of experience in digital marketing and online business',
              'Founder of Multiple Agency and SkillX Academy, empowering thousands with digital skills',
              'Has helped hundreds of clients scale to 6–8 figure businesses using lean, digital systems',
              'Known for turning complex strategies into simple, actionable frameworks',
              'Creator of the Digital Product Business Machine Workshop which is a proven system to launch a digital income stream without a product, team, or tech skills',
              'On a mission to help individuals achieve financial freedom through digital entrepreneurship',
            ].map((text, i) => (
              <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#eaa74b', marginRight: '10px', fontSize: '18px' }}>»</span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Info Box */}
        <div style={{ flex: '1 1 35%', color: '#fff', textAlign: 'left',marginBottom:'40%' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', fontStyle: 'italic' }}>DARSHAN JOSHI</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '12px',color:'#FFFFFFD1' }}> 🕒 <strong>7+ Years Of Experience</strong></li>
            <li style={{ marginBottom: '12px',color:'#FFFFFFD1' }}>  ∞ <strong>12 Cr+ Ad Spend Managed</strong></li>
            <li style={{ marginBottom: '12px',color:'#FFFFFFD1' }}> 👨‍🏫 <strong>Trained Over 10,000+ Students</strong></li>
            <li style={{ marginBottom: '12px',color:'#FFFFFFD1' }}>  ₹  <strong>Multiple 8 Figures In Revenue Generated</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DarshanSection;
