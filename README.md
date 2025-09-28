# 🍛 Streetly - Authentic Indian Street Food Website

Welcome to **Streetly**, a modern and elegant website for an authentic Indian street food stall. Built with React and featuring a sophisticated design, interactive chatbot, and responsive layout perfect for food businesses.

![Streetly Banner](https://img.shields.io/badge/Streetly-Indian%20Street%20Food-golden?style=for-the-badge&logo=react&logoColor=white)

## 🌟 Live Demo

🔗 **[View Live Website](https://bhavesh-solminde.github.io/Streetly/)**

## ✨ Features

### 🍽️ **Menu & Pricing**

- **Food Items**: Samosa (₹40), Pav Bhaji (₹70), Vada Pav (₹35), Masala Dosa (₹80), Chole Bhature (₹90)
- **Beverages**: Masala Chai (₹20), Sweet Lassi (₹30), Fresh Lime Soda (₹25), Mango Shake (₹45)
- **Student-Friendly Pricing**: All items under ₹100

### 🤖 **Interactive Chatbot**

- Smart responses for menu inquiries, pricing, location, and timing
- Elegant golden theme matching the website design
- Real-time chat with emoji support and timestamps
- Mobile-responsive design

### 📱 **Responsive Design**

- Mobile-first approach with breakpoints at 2000px, 1150px, 650px, 450px
- Smooth animations and transitions
- Cross-browser compatibility

### 🎨 **Design Features**

- **Color Palette**: Golden (#dcca87), Black (#0c0c0c), Crimson (#f5efdb)
- **Typography**: Cormorant Upright (headings) + Open Sans (body)
- **Smooth Scrolling**: Navigate to sections with elegant animations
- **Toast Notifications**: Newsletter subscription confirmation

## 🚀 Tech Stack

| Technology          | Purpose                                 |
| ------------------- | --------------------------------------- |
| ⚛️ **React 18**     | Frontend framework with hooks           |
| ⚡ **Vite**         | Build tool and development server       |
| 🎨 **CSS3**         | Custom properties and responsive design |
| 🔧 **React Icons**  | Beautiful icons (Bootstrap Icons)       |
| 📱 **Mobile-First** | Responsive design approach              |

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Chatbot/        # Interactive chatbot
│   ├── Footer/         # Newsletter & footer overlay
│   ├── Menuitem/       # Menu item display
│   ├── Navbar/         # Navigation bar
│   └── SubHeading/     # Section subheadings
├── container/          # Page sections
│   ├── AboutUs/        # About section
│   ├── Gallery/        # Photo gallery
│   ├── Header/         # Hero section
│   ├── Menu/           # Special menu section
│   └── Footer/         # Footer section
├── constants/          # Data and images
│   ├── data.js         # Menu items and content
│   └── images.js       # Image imports
└── assets/             # Static images
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/Bhavesh-Solminde/Streetly.git

# Navigate to project directory
cd Streetly

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Components

### 🏠 **Header Section**

- Hero banner with call-to-action button
- Smooth scroll to menu section
- Responsive design with elegant typography

### 📋 **Menu Section**

- Dynamic menu items from data.js
- Categorized into Food Items and Beverages
- Pricing in Indian Rupees (₹)

### 🤖 **Chatbot Assistant**

- Fixed position chat toggle button
- Context-aware responses for:
  - Menu inquiries
  - Pricing questions
  - Location and timing
  - Spice level preferences
  - General help

### 📧 **Newsletter Subscription**

- Email validation
- Toast notification on successful subscription
- Elegant golden-themed design

## 📱 Responsive Breakpoints

```css
@media screen and (max-width: 2000px) {
  /* Large screens */
}
@media screen and (max-width: 1150px) {
  /* Tablets */
}
@media screen and (max-width: 650px) {
  /* Small tablets */
}
@media screen and (max-width: 450px) {
  /* Mobile phones */
}
```

## 🎨 Color Scheme

```css
:root {
  --color-golden: #dcca87; /* Primary accent */
  --color-black: #0c0c0c; /* Text and backgrounds */
  --color-gray: #545454; /* Secondary text */
  --color-crimson: #f5efdb; /* Light backgrounds */
  --color-white: #ffffff; /* Contrast elements */
}
```

## 🍛 Menu Items

### Food Items

- **Samosa (2 pcs)** - ₹40 | _Crispy fried pastry | Spiced potatoes | Peas_
- **Pav Bhaji** - ₹70 | _Spiced vegetable mash | Buttered pav bread | Fresh onions_
- **Vada Pav** - ₹35 | _Spicy potato fritter | Soft bun | Chutneys_
- **Masala Dosa** - ₹80 | _Crispy rice crepe | Spiced potato filling | Sambar & chutney_
- **Chole Bhature** - ₹90 | _Spicy chickpea curry | Fluffy fried bread | Pickled onions_

### Beverages

- **Masala Chai** - ₹20 | _Traditional Indian spiced tea | Fresh ginger | Cardamom_
- **Sweet Lassi** - ₹30 | _Refreshing yogurt drink | Cardamom | Creamy texture_
- **Fresh Lime Soda** - ₹25 | _Sparkling water | Fresh lime juice | Mint | Salt or sweet_
- **Mango Shake** - ₹45 | _Fresh mango pulp | Chilled milk | Ice cream | Seasonal specialty_

## 📍 Business Information

- **Location**: Near College Gate, Main Road, University Area
- **Hours**: Daily 11:00 AM - 10:00 PM
- **Contact**: +91 98765-43210
- **Email**: hello@streetly.com

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Bhavesh Solminde**

- GitHub: [@Bhavesh-Solminde](https://github.com/Bhavesh-Solminde)
- Email: bhaveshsolminde@gmail.com

## 🙏 Acknowledgments

- React community for excellent documentation
- Vite for lightning-fast development experience
- Google Fonts for beautiful typography
- React Icons for consistent iconography

---

⭐ **Star this repository if you found it helpful!**

_Made with ❤️ for authentic Indian street food lovers_
