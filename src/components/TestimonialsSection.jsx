import React from "react";

const TestimonialsSection = () => {
  return (
    <div style={{ backgroundColor: "#121212", padding: "40px 20px", color: "#fff", textAlign: "center" }}>
      {/* Wiggle animation style */}
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

      {/* Heading */}
      <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Results Speak Louder Than Words
      </h2>
      <p style={{ color: "#b0aead", fontSize: "20px", marginTop: "10px" }}>
        {"{Refer To The Video Testimonial Below}"}
      </p>

      {/* Video Testimonials */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        <iframe
          width="300"
          height="200"
          src="https://player.vimeo.com/video/969475377"
          title="Testimonial 1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ borderRadius: "10px", background: "#000" }}
        ></iframe>

        <iframe
          width="300"
          height="200"
          src="https://player.vimeo.com/video/969475419"
          title="Testimonial 2"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ borderRadius: "10px", background: "#000" }}
        ></iframe>

        <iframe
          width="300"
          height="200"
          src="https://player.vimeo.com/video/969475329"
          title="Testimonial 3"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ borderRadius: "10px", background: "#000" }}
        ></iframe>
      </div>

      {/* Call to Action Section */}
      <div style={{ padding: '30px 20px' }}>
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
    </div>
  );
};

export default TestimonialsSection;
