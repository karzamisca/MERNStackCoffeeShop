// controllers/imageController.js
const axios = require("axios");

exports.proxyImage = async (req, res) => {
  try {
    const imageUrl = req.query.url;

    if (!imageUrl) {
      return res.status(400).json({ error: "No URL provided" });
    }

    // Fetch the image from the external source
    const response = await axios({
      method: "get",
      url: imageUrl,
      responseType: "stream",
    });

    // Set appropriate headers
    res.set("Content-Type", response.headers["content-type"]);

    // Pipe the image data to our response
    response.data.pipe(res);
  } catch (err) {
    console.error("Error proxying image:", err.message);
    res.status(500).json({ error: "Failed to proxy image" });
  }
};
