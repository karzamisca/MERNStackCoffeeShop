//views\src\pages\About.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get("/api/about").then((res) => setInfo(res.data));
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>{info.description}</p>
    </div>
  );
}

export default About;
