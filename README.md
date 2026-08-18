# Interactive Cards Gallery 🌿

A lightweight, responsive web application showcasing interactive CSS art and DOM manipulation. The project focuses on clean architecture, semantic markup, and modern CSS features.

[👉 View Live Demo](https://github.com/hinab0/herbarium)

## ✨ Key Features
*   **Theme Switcher:** Automatic adaptation to the user's system preferences (Light/Dark mode) using `@media (prefers-color-scheme: dark)`.
*   **Mobile-Optimized:** Fluid layout preventing mobile browser viewport issues using `100dvh`.
*   **Interactive UI:** Dynamic class toggling for card states via Vanilla JavaScript.
*   **Clean Architecture:** Strict separation of concerns (HTML structure, CSS presentation, JS logic).

## 🛠️ Tech Stack
*   **HTML5** (Semantic structure)
*   **CSS3** (Flexbox, Custom Properties, Media Queries)
*   **JavaScript** (ES6+, DOM Manipulation, Event Listeners)

## 💡 Technical Highlights
During the development of this project, specific attention was given to:
1.  **Viewport Management:** Resolving the classic iOS/Android bottom-bar scroll issue by implementing dynamic viewport heights (`dvh`).
2.  **Maintainability:** Keeping styles scoped and using BEM-like naming conventions for CSS classes to prevent specificity clashes.
3.  **Performance:** Utilizing native browser features for themes instead of heavy JS libraries.
