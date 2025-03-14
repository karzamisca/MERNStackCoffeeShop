//views/src/pages/About.jsx

import React from "react";
import "./About.css"; // We'll create this CSS file next

function About() {
  // Expanded data with more information
  const info = {
    name: "Kylong Coffee",
    description: "The best coffee in town!",
    founded: "2018",
    mission:
      "To serve exceptional coffee while supporting sustainable farming practices and creating a welcoming community space.",
    values: [
      "Quality - We source only the finest beans and prepare them with care",
      "Sustainability - We partner with eco-friendly farms and use biodegradable packaging",
      "Community - We create spaces where people connect and ideas flourish",
    ],
    team: [
      {
        name: "Placeholder",
        role: "Founder & Head Roaster",
        bio: "Coffee enthusiast with 15 years of experience in specialty coffee.",
      },
      {
        name: "Placeholder",
        role: "Store Manager",
        bio: "Passionate about customer service and creating the perfect coffee experience.",
      },
      {
        name: "Placeholder",
        role: "Sourcing Director",
        bio: "Travels the world to find the most unique and flavorful coffee beans.",
      },
    ],
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>{info.name}</h1>
        <p className="tagline">{info.description}</p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in {info.founded}, Kylong Coffee began as a small cart in the
          local farmers' market. Our commitment to quality and community quickly
          earned us a loyal following, allowing us to grow into the beloved
          coffeehouse we are today.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>{info.mission}</p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <ul className="values-list">
          {info.values.map((value, index) => (
            <li key={index}>
              <strong>{value.split(" - ")[0]}:</strong> {value.split(" - ")[1]}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {info.team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                {/* Placeholder for team member image */}
                <div className="avatar-placeholder">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>Visit Us</h2>
        <p>
          We're located in the heart of downtown at 123 Coffee Street. Come join
          us for a cup of our signature brew and experience the Kylong
          difference!
        </p>
        <div className="hours">
          <h3>Hours</h3>
          <p>Monday - Friday: 6am - 8pm</p>
          <p>Saturday - Sunday: 7am - 9pm</p>
        </div>
      </div>
    </div>
  );
}

export default About;
