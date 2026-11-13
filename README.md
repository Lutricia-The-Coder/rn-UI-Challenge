# Pharmacy UI Challenge 

A modern, responsive pharmacy product page built with **React Native**, **Expo**, and **TypeScript**. This project focuses on recreating a clean and user-friendly shopping experience with a bright visual identity, interactive product categories, and a simple purchasing interface.

##  Features

- **Product Categories:** Switch between Relax and Sleep products.
- **Product Display:** View product images, names, descriptions, and prices.
- **Product Size Selection:** Choose between 30, 60, and 90 units.
- **Quantity Selector:** Increase or decrease the desired quantity.
- **Shopping Cart Interaction:** Add products to the cart using the Buy Now button.
- **Custom Branding:** Pharmacy-inspired yellow theme, logo, icons, and custom typography.
- **Responsive Layout:** Designed to fit mobile devices and desktop browser screens.
- **Custom Fonts:** Rosmatika and Sauce Grotesk Semi Bold.

##  Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)
- [Expo Vector Icons](https://icons.expo.fyi/)

##  Project Structure

```text
project-root/
│
├── assets/
│   ├── fonts/
│   │   ├── Rosmatika Regular.ttf
│   │   └── SauceGrotesk-SemiBold.ttf
│   │
│   └── images/
│       ├── logo.png
│       ├── Relax.png
│       ├── Sleep.png
│       ├── Relax-icon.png
│       ├── Sleep-icon.png
│       └── Pharmacy-inspo.png
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── ProductDisplay.tsx
│   │   ├── QuantitySelector.tsx
│   │   └── BuyButton.tsx
│   │
│   └── constants/
│       └── pharmacy-colors.ts
│
├── app.json
├── package.json
└── README.md
```

##  Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [Expo Go](https://expo.dev/go/) (if testing on a physical device)

### Installation

1. Clone the repository:

   ```bash
   git clone rn-UI-Challenge
   ```

2. Navigate into the project directory:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

### Running the Application

**On a physical device:**
1. Install Expo Go on your phone.
2. Run `npx expo start`.
3. Scan the QR code displayed in your terminal or browser.

**On the web:**

```bash
npx expo start --web
```

##  Design

The interface uses a bright yellow background, rounded white product information panel, and minimal controls to create a simple shopping experience.

### Color Palette

| Color          | Hex Code  | Usage                       |
|----------------|-----------|-----------------------------|
| Primary Yellow | `#F8D52D` | Main background and buttons |
| White          | `#FFFFFF` | Product information panel   |
| Dark           | `#222222` | Main text and icons         |
| Secondary Grey | `#858585` | Supporting text             |

### Typography

- **Rosmatika:** Used for the brand logo.
- **Sauce Grotesk Semi Bold:** Used for product headings.

##  Screenshots

Add screenshots of your completed application here.

```markdown
![Pharmacy App Screenshot](./assets/images/app-screenshot.png)
```

##  Functionality Notes

- Selecting a different category updates the displayed product.
- Changing categories resets the product quantity to 1.
- Product sizes can be selected independently.
- The quantity selector updates the selected purchase quantity.
- Pressing **BUY NOW** displays an add-to-cart confirmation on supported native platforms.

##  Future Improvements

- Integrate a functional shopping cart.
- Add product details and descriptions.
- Connect to a product API.
- Implement checkout and payment functionality.
- Add navigation between product pages.
- Improve accessibility and interaction feedback.



---

