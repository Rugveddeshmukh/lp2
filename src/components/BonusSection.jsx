import React, { useState, useEffect } from "react";
import bonus1 from "../Assest/Darshan-bundle-final-1.webp";
import bonus2 from "../Assest/Darshan-bundle-final-3.webp";
import bonus3 from "../Assest/Darshan-bundle-final-2.webp";

const BonusSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const targetTime = new Date("2025-06-27T18:53:29");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  const bonuses = [
    {
      id: 1,
      title: "Digital Product Millionaire Checklist",
      price: "₹ 4,500/-",
      image: bonus1,
    },
    {
      id: 2,
      title: "300+ FREE AI Tools List",
      price: "₹ 4,500/-",
      image: bonus2,
    },
    {
      id: 3,
      title: "Digital Product FREE ADS Guide",
      price: "₹ 6,000/-",
      image: bonus3,
    },
  ];

  return (
    <div style={{ backgroundColor: "#121212", padding: "40px 20px", textAlign: "center" }}>
      {/* Inject Wiggle Animation */}
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

      {/* Headings */}
      <h2 style={{ color: "#F52424", fontSize: "32px" }}>BUT WAIT!!!</h2>
      <h2 style={{ color: "#ffffff94", fontSize: "26px" }}>That’s Not Everything…</h2>
      <h2 style={{ color: "#fff", fontSize: isMobile ? "22px" : "30px" }}>
        You Can Unlock These <span style={{ color: "#DEA15B" }}>3 Amazing Bonuses Worth ₹15,000</span><br />
        For Absolutely FREE
      </h2>
      <h2 style={{ color: "#ffffff9c", fontSize: "20px", marginBottom: "30px" }}>
        Only If You Register For The Workshop Right Now!!!
      </h2>

      {/* Bonus Cards */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {bonuses.map((bonus, index) => (
          <div key={bonus.id} style={{
            backgroundColor: "#181818",
            border: "1px solid #e0a14c",
            borderRadius: "15px",
            padding: "30px 20px",
            width: isMobile ? "90%" : "300px",
            position: "relative",
            textAlign: "center"
          }}>
            <div style={{
              position: "absolute",
              top: "-25px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              color: "#fff",
              border: "1px solid #e0a14c",
              borderRadius: "10px",
              padding: "8px 16px",
              fontWeight: "bold"
            }}>
              🎁 Bonus #{index + 1}:
            </div>
            <img
              src={bonus.image}
              alt={bonus.title}
              style={{ width: "90%", borderRadius: "10px", marginTop: "30px" }}
            />
            <h3 style={{ fontSize: "17px", margin: "10px 0", color: "#fff" }}>{bonus.title}</h3>
            <div style={{
              backgroundColor: "#b10000",
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "16px",
              display: "inline-block"
            }}>
              Priced: {bonus.price}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Info */}
      <h2 style={{ color: "#fff", marginTop: "40px", fontSize: "24px", fontWeight: "bold" }}>
        Get All This Inside The Workshop
      </h2>
      <h3 style={{ color: "#F52424", fontSize: "24px", lineHeight: "1.2" }}>
        Total Value Of Bonuses: <span style={{ textDecoration: "line-through" }}>₹15,000/-</span>
      </h3>
      <h2 style={{ fontSize: "32px", color: "#54CC16", fontWeight: "bold", lineHeight: "1.2" }}>
        Buy Today For Just Rs. 47/- <span style={{ textDecoration: "line-through", color: "#FF0000", fontSize: "24px" }}>199/-</span>
      </h2>
      <p style={{ fontSize: "18px", color: "#fff", marginBottom: "10px" }}>
        Time is running out. Reserve your seat now!
      </p>

      {/* Countdown */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0"
      }}>
        {["Hours", "Minutes", "Seconds"].map((label, i) => {
          const val = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i].toString().padStart(2, "0");
          return (
            <div key={label} style={{
              background: "#1f1f1f",
              padding: "15px 20px",
              borderRadius: "10px",
              border: "1px solid #555",
              color: "#fff"
            }}>
              <div style={{ fontSize: "28px", fontWeight: "bold" }}>{val}</div>
              <div style={{ fontSize: "14px" }}>{label}</div>
            </div>
          );
        })}
      </div>

      {/* Wiggle Button */}
      <button className="wiggle-button">
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

export default BonusSection;
