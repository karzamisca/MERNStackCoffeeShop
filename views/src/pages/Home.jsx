import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS file

function Home() {
  const [products, setProducts] = useState([]); // ✅ Default to empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder as data URL to comply with CSP "img-src 'self' data:"
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f8f8'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' fill='%23888888'%3ECoffee Product%3C/text%3E%3C/svg%3E";

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/home")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data); // ✅ Ensure it's an array
        } else {
          console.error("Unexpected API response:", res.data);
          setProducts([]); // ✅ Fallback to empty array
          setError("Unexpected data format received");
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setProducts([]); // ✅ Handle API failure
        setError("Failed to load products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Function to process image URLs to use our proxy
  const getProxiedImageUrl = (url) => {
    if (!url) return placeholderImage;

    // Use as-is if it's a relative URL (from your own domain)
    if (url.startsWith("/")) {
      return url;
    }

    // Use as-is if it's a data URL
    if (url.startsWith("data:")) {
      return url;
    }

    // For external URLs (like imgur), use our proxy
    return `/api/images/proxy?url=${encodeURIComponent(url)}`;
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Coffee Shop</h1>
        <p className="tagline">Experience the finest artisanal coffee blends</p>
      </div>

      <div className="products-section">
        <h2 className="section-title">Our Coffee Selection</h2>

        {loading && <div className="loading-spinner">Loading products...</div>}

        {error && <div className="error-message">{error}</div>}

        {!loading && !error && products.length === 0 && (
          <div className="no-products">No products available at the moment</div>
        )}

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id || item._id}>
              <div className="product-image-container">
                <img
                  src={getProxiedImageUrl(item.image)}
                  alt={item.name}
                  className="product-image"
                  onError={(e) => {
                    console.log(`Image failed to load: ${item.image}`);
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                {item.description && (
                  <p className="product-description">{item.description}</p>
                )}
                <div className="product-footer">
                  <span className="product-price">${item.price}</span>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
