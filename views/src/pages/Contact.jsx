//views\src\pages\Contact.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get("/api/contact").then((res) => setContact(res.data));
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
}

export default Contact;
