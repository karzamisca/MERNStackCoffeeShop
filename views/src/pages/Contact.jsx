//views\src\pages\Contact.jsx
function Contact() {
  // Directly embed the contact data instead of fetching from API
  const contact = {
    phone: "+123456789",
    email: "contact@kylongcoffee.com",
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
}

export default Contact;
