//views\src\pages\About.jsx
function About() {
  // Directly embed the data instead of fetching from API
  const info = {
    name: "Kylong Coffee",
    description: "The best coffee in town!",
  };

  return (
    <div>
      <h2>About Us</h2>
      <p>{info.description}</p>
    </div>
  );
}

export default About;
