import React from "react";
import Student from "../Assest/student.webp";
import DigitalMarketer from "../Assest/digital-marketer.webp";
import Entrepreneur from "../Assest/self-employee-1.webp";
import Dropshipper from "../Assest/dropshipper.webp";
import Freelancer from "../Assest/freelancer-1.webp";
import AgencyOwner from "../Assest/agency-owner.webp";
import SelfEmployee from "../Assest/self-employee-1.webp";
import JobProfessional from "../Assest/job.webp";
import SmallBusinessOwner from "../Assest/small-business-owner.webp";

const personas = [
  { label: "Student", image: Student },
  { label: "Digital Marketer", image: DigitalMarketer },
  { label: "Entrepreneur", image: Entrepreneur },
  { label: "Dropshipper", image: Dropshipper },
  { label: "Freelancer", image: Freelancer },
  { label: "Agency Owner", image: AgencyOwner },
  { label: "Self Employee", image: SelfEmployee },
  { label: "Job Professional", image: JobProfessional },
  { label: "Small Business Owner", image: SmallBusinessOwner },
];

const PersonaCard = ({ image, label }) => (
  <div style={styles.card}>
    <img src={image} alt={label} style={{ height: 120 }} />
    <h3 style={styles.label}>{label}</h3>
  </div>
);

const AudienceSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.topHeading}>Who Can Attend <span style={{color:'#DEA15B'}}>This Workshop </span></h2>

      <div style={styles.grid}>
        {personas.map((p) => (
          <PersonaCard key={p.label} {...p} />
        ))}
      </div>

      <p style={styles.text}>
        And Anyone Who Is Looking To <b>Start Or Scale</b> Their Online Business,
        Especially Those Interested In{" "}
        <span style={styles.underline}>Creating And Selling Digital Products.</span>
      </p>

      <h2 style={styles.heading}>Then This Workshop Is For You!!!</h2>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  topHeading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40,
  },
  card: {
    background: "linear-gradient(to bottom, #1a1a1a, #2e2e2e)",
    padding: 20,
    borderRadius: 10,
    width: 220,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#ccc",
    fontSize: 18,
    maxWidth: 900,
    margin: "0 auto 20px",
  },
  underline: {
    textDecoration: "underline",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
};

export default AudienceSection;
