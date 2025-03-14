//views\src\pages\Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]); // ✅ Default to empty array

  useEffect(() => {
    axios
      .get("/api/home")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data); // ✅ Ensure it's an array
        } else {
          console.error("Unexpected API response:", res.data);
          setProducts([]); // ✅ Fallback to empty array
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setProducts([]); // ✅ Handle API failure
      });
  }, []);

  return (
    <div>
      <h2>Our Coffee</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width="100" />
            <p>
              {item.name} - {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
