import images from "./images";

const wines = [
  {
    title: "Samosa (2 pcs)",
    price: "₹40",
    tags: "Crispy fried pastry | Spiced potatoes | Peas",
  },
  {
    title: "Pav Bhaji",
    price: "₹70",
    tags: "Spiced vegetable mash | Buttered pav bread | Fresh onions",
  },
  {
    title: "Vada Pav",
    price: "₹35",
    tags: "Spicy potato fritter | Soft bun | Chutneys",
  },
  {
    title: "Masala Dosa",
    price: "₹80",
    tags: "Crispy rice crepe | Spiced potato filling | Sambar & chutney",
  },
  {
    title: "Chole Bhature",
    price: "₹90",
    tags: "Spicy chickpea curry | Fluffy fried bread | Pickled onions",
  },
];

const cocktails = [
  {
    title: "Masala Chai",
    price: "₹20",
    tags: "Traditional Indian spiced tea | Fresh ginger | Cardamom",
  },
  {
    title: "Sweet Lassi",
    price: "₹30",
    tags: "Refreshing yogurt drink | Cardamom | Creamy texture",
  },
  {
    title: "Fresh Lime Soda",
    price: "₹25",
    tags: "Sparkling water | Fresh lime juice | Mint | Salt or sweet",
  },
  {
    title: "Mango Shake",
    price: "₹45",
    tags: "Fresh mango pulp | Chilled milk | Ice cream | Seasonal specialty",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Fresh & Hygienic",
    subtitle: "Daily fresh ingredients and clean preparation",
  },
  {
    imgUrl: images.award01,
    title: "Student Friendly",
    subtitle: "Affordable prices for students and young professionals",
  },
  {
    imgUrl: images.award05,
    title: "Quick Service",
    subtitle: "Fast preparation and delivery under 5 minutes",
  },
  {
    imgUrl: images.award03,
    title: "Eco Friendly",
    subtitle: "Biodegradable plates and eco-friendly packaging",
  },
];

export default { wines, cocktails, awards };
