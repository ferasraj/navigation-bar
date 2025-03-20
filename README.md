# Navigation Bar

---

## Description

This is a responsive and interactive circular navigation menu designed for modern websites. It includes social media icons (e.g., Facebook, Twitter, Instagram, LinkedIn, Discord, WhatsApp, Snapchat, YouTube, WeChat) that expand outward when activated. The menu also features a close button to collapse the items back into the center.

Built with **HTML**, **CSS**, and **JavaScript**, this navigation bar is fully customizable and easy to integrate into any project. It uses **Ionicons** for the social media icons, ensuring clean and modern visuals.

---

## Features

- **Interactive Design:** Click to expand or collapse the circular menu.
- **Social Media Icons:** Includes icons for popular platforms like Facebook, Twitter, Instagram, LinkedIn, Discord, WhatsApp, Snapchat, YouTube, and WeChat.
- **Responsive Layout:** Works seamlessly on different screen sizes.
- **Customizable:** Easily modify colors, sizes, and animations to match your project's style.
- **Lightweight:** Minimal dependencies (only Ionicons required).

---

## Installation

### 1. Clone the Repository

To get started, clone this repository to your local machine:

```bash
git clone
```

### 2. Include Dependencies

Make sure to include the **Ionicons** library in your project. Add the following `<script>` tags to your HTML file:

```html
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
></script>
```

### 3. Add Files to Your Project

Copy the `index.html`, `styles.css`, and `script.js` files into your project directory.

---

## Usage

1. Open the `index.html` file in your browser to see the navigation bar in action.
2. Click on the center circle to expand the menu.
3. Click the close button (`X`) to collapse the menu.

---

## Customization

### Changing Icons

To replace or add new icons, update the `<ion-icon>` elements in the `index.html` file. You can find a full list of available icons [here](https://ionic.io/ionicons).

Example:

```html
<span style="--i: 0; --x: -1; --y: 0">
  <ion-icon name="logo-github"></ion-icon>
</span>
```

### Adjusting Positions

To change the positions of the icons, modify the `--x` and `--y` CSS variables in the `style` attribute of each `<span>` element. These values determine the direction and distance of the expansion.

Example:

```html
<span style="--i: 0; --x: -1; --y: 0"></span>
<!-- Moves left -->
<span style="--i: 1; --x: 0; --y: -1"></span>
<!-- Moves up -->
```

### Styling

You can customize the appearance of the navigation bar by editing the `styles.css` file. For example:

- Change the background color of the dots:
  ```css
  .main .navigation span {
    background: #your-color;
  }
  ```
- Modify the size of the icons:
  ```css
  .main .navigation span ion-icon {
    font-size: 24px; /* Adjust size */
  }
  ```

---

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request. Please ensure your changes align with the project's goals and coding standards.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed.

---

## Credits

- Icons provided by [Ionicons](https://ionic.io/ionicons).
- Inspired by modern web design trends.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@ferasraj](https://github.com/ferasraj)
- Email: your-email@example.com

---

Thank you for using **Navigation Bar**! 🚀

---
