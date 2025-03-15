//views/src/pages/Home.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS file

function Home() {
  const [products, setProducts] = useState([]); // ✅ Default to empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Helper function to ensure Imgur images load correctly
  const getImageUrl = (imgurLink) => {
    // Check if it's already a direct image link
    if (
      imgurLink.includes(".jpg") ||
      imgurLink.includes(".png") ||
      imgurLink.includes(".gif")
    ) {
      return imgurLink;
    }

    // Normalize imgur links to ensure proper loading
    if (imgurLink.includes("imgur.com")) {
      // Extract the image ID
      const matches = imgurLink.match(
        /imgur\.com\/(?:a\/|gallery\/)?([a-zA-Z0-9]+)/
      );
      if (matches && matches[1]) {
        // Convert to direct image link if it's not already
        return `https://i.imgur.com/${matches[1]}.jpg`;
      }
    }

    // Return original if we can't process it
    return imgurLink;
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
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Coffee+Product";
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                {item.description && (
                  <p className="product-description">{item.description}</p>
                )}
                <div className="product-footer">
                  <span className="product-price">Price: ${item.price}</span>
                  <span className="product-quantity">
                    Quantity: {item.quantity}
                  </span>
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
