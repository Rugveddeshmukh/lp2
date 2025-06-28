import React from "react";
import guaranteeImg from "../Assest/img34.webp"; // your badge image
import gridBackground from "../Assest/Frame-16-1.webp"; // grid background

const MoneyBackGuarantee = () => {
  return (
    <div
      style={{
       
        backgroundImage: `url(${gridBackground})`,
       backgroundColor: "#0e0e0e",
        backgroundRepeat: "repeat",
        backgroundSize: "100px",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          backgroundColor: "#121212",
          border: "2px solid #e0a14c",
          borderRadius: "12px",
          padding: "50px 30px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <img
          src={guaranteeImg}
          alt="100% Money Back Guarantee"
          style={{
            width: "180px",
            marginBottom: "30px",
          }}
        />

        <h2
          style={{
            color: "#DEA15B",
            fontSize: "32px",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          100% Money Back Guarantee
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#ddd",
            marginBottom: "10px",
          }}
        >
          Yes, I Am That Confident In The Value I Provide, People Who Attend This Workshop Have Shown
          <strong> 99.75% Satisfaction Rate</strong>, And I Am Sure You Too Will Get Immense Value Out Of It.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#ccefff",
          }}
        >
          If For Some Reason, You Feel This Is Not Worth It & I’ve Wasted Your Time & Money,
          I Will See To It Personally That You Get A 100% Refund ASAP.
        </p>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
