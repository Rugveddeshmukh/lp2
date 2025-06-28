import React, { useEffect, useState } from 'react';
import heroVideoThumb from '../Assest/1-5.webp';
import liveGif from '../Assest/giphy-1-1-1-1.gif';
import hostImg from '../Assest/img123.webp';

// React icons
import { FaVideo, FaLanguage, FaClock } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      background: '#121212',
      color: 'white',
      fontFamily: 'Outfit, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        border: '1px solid #FFB74D',
        borderRadius: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 20px',
        marginBottom: '30px',
        fontSize: isMobile ? '14px' : '18px',
        backgroundColor: '#1A1A1A'
      }}>
        <img
          src={liveGif}
          alt="Live"
          style={{ width: isMobile ? '16px' : '22px', height: 'auto' }}
        />
        Join Me Live Inside The 2-Hour Digital Product Machine Workshop.
      </div>

      <h1 style={{
        fontSize: isMobile ? '26px' : '39px',
        fontWeight: 600,
        lineHeight: '1.4',
        marginBottom: '20px'
      }}>
        Launch Your Digital Product Business <span style={{ color: '#F4A940' }}>Using Free AI</span><br />
        in <span style={{ color: '#F4A940' }}>30 Min & Get 10+ Sales EveryDay</span> on Automation <br />
        <span style={{ color: '#fff', textDecoration: 'underline' }}>Without Ads</span>
      </h1>

      <p style={{
        fontSize: isMobile ? '16px' : '20px',
        marginBottom: '40px',
        color: '#cfcfcf'
      }}>
        Easy & Fastest Way to Sell Digital Products even If You Are a Complete Beginner
      </p>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
      }}>
        <img
          src={heroVideoThumb}
          alt="Video thumbnail"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '20px'
          }}
        />
      </div>
    </div>
  );
};

const WorkshopInfoSection = () => {
  const iconSize = 20;
  const iconColor = '#F4A940';

  const infoCards = [
    {
      icon: <FaVideo size={iconSize} color={iconColor} />,
      title: 'Live Workshop',
      subtitle: 'ON ZOOM',
    },
    {
      icon: <FaLanguage size={iconSize} color={iconColor} />,
      title: 'LANGUAGE',
      subtitle: 'Hinglish',
    },
    {
      icon: <MdDateRange size={iconSize} color={iconColor} />,
      title: 'DATE - 26th',
      subtitle: 'June\nTime - 7:00 PM',
    },
    {
      icon: <FaClock size={iconSize} color={iconColor} />,
      title: 'DURATION',
      subtitle: '2 Hours',
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const countdownDate = new Date('2025-06-26T19:00:00+05:30');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#121212',
      color: '#fff',
      fontFamily: 'Poppins, sans-serif',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {infoCards.map((item, index) => (
          <div key={index} style={{
            background: 'rgb(26, 26, 26)',
            border: '1px solid #F4A940',
            padding: '15px 20px',
            borderRadius: '10px',
            width: '180px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: '#111',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.title}</div>
              <div style={{ whiteSpace: 'pre-line', color: '#ddd', fontSize: '14px' }}>{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Host Info */}
      <div style={{
        backgroundColor: '#111',
        borderRadius: '15px',
        padding: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <img
          src={hostImg}
          alt="Host"
          style={{ height: '100px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ color: '#F4A940', margin: 0 }}>Host: Darshan Joshi</h2>
          <p style={{ margin: 0, color: '#ccc' }}>~ 7-Fig Agency Owner & Digital Product Expert</p>
        </div>
      </div>

      {/* Countdown */}
      <h2 style={{ marginBottom: '20px' }}>Workshop Will Start In:</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        {[{ time: timeLeft.hours, label: 'Hours' },
        { time: timeLeft.minutes, label: 'Minutes' },
        { time: timeLeft.seconds, label: 'Seconds' }].map((item, idx) => (
          <div key={idx} style={{
            backgroundColor: '#1A1A1A',
            padding: '20px 30px',
            borderRadius: '10px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            {item.time}
            <div style={{ fontSize: '14px', color: '#ccc' }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Wiggle Button */}
      <button
        className="wiggle-button"
        style={{
          backgroundColor: 'rgb(228, 166, 76)',
          padding: '20px 30px',
          border: 'none',
          borderRadius: '12px',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 6px #ccc',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Yes, I Want To Earn More Than A Full-Time Professional
        <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
          Join the workshop Now at just Rs 47
        </div>
      </button>

      <p style={{ fontSize: '16px', color: '#fff' }}>
        Register before <span style={{ color: '#F4A940' }}>26, June</span> to unlock bonuses worth <span style={{ color: '#F4A940' }}>Rs 15,000</span>
      </p>
      <p style={{ fontSize: '14px', color: '#aaa' }}>⭐⭐⭐⭐⭐ RATED 4.7 OUT OF 5</p>
    </div>
  );
};

const LandingPage = () => {
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
      `}</style>
      <HeroSection />
      <WorkshopInfoSection />
    </>
  );
};

export default LandingPage;
