//controllers\homeController.js
exports.getHome = (req, res) => {
  res.json([
    { id: 1, name: "Espresso", price: "$3", image: "/images/espresso.jpg" },
    { id: 2, name: "Cappuccino", price: "$4", image: "/images/cappuccino.jpg" },
    { id: 3, name: "Latte", price: "$4.50", image: "/images/latte.jpg" },
  ]);
};
