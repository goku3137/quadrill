# Quadrill — Corporate Website

A modern, multi-page corporate website built with **React + Vite**, featuring client-side routing, reusable components, and a responsive design.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Styling | Vanilla CSS (component-scoped) |
| Linting | ESLint 10 |

---

## 📁 Project Structure

```
quadrill/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── HeroBanner.jsx / .css
│   │   └── ServiceCard.jsx / .css
│   ├── pages/               # Route-level page components (12 pages)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Vision.jsx
│   │   ├── Management.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── Equipment.jsx
│   │   ├── Projects.jsx
│   │   ├── HSE.jsx
│   │   ├── Gallery.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Root component with routing setup
│   ├── main.jsx             # App entry point
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 📄 Pages (12 Total)

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero banner and overview |
| `/about` | About | Company background and history |
| `/vision` | Vision | Mission, vision, and values |
| `/management` | Management | Leadership team |
| `/services` | Services | Services offered |
| `/industries` | Industries | Industry sectors served |
| `/equipment` | Equipment | Equipment catalogue |
| `/projects` | Projects | Past and ongoing projects |
| `/hse` | HSE | Health, Safety & Environment policy |
| `/gallery` | Gallery | Photo gallery |
| `/careers` | Careers | Job openings and applications |
| `/contact` | Contact | Contact form and details |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd quadrill
```

### 2. Install dependencies

```bash
npm install
```

---

## 🛠️ Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server (HMR enabled) |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Serve the production build locally for testing |
| `npm run lint` | Run ESLint to check for code issues |

---

## 💻 Running Locally

```bash
# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default (Vite may pick a different port if 5173 is busy — check the terminal output).

Hot Module Replacement (HMR) is enabled — changes you make to source files will reflect instantly in the browser without a full reload.

---

## 🧪 Testing the Build

To verify the production build works correctly:

```bash
# 1. Create the production build
npm run build

# 2. Preview the built output locally
npm run preview
```

The preview server will serve the `dist/` folder. This is useful to catch any issues that only appear in production mode (e.g., missing assets, routing issues).

---

## 🏗️ How the Project Was Bootstrapped

This project was initialized using the official **Vite React template**:

```bash
npx create-vite@latest quadrill --template react
cd quadrill
npm install
```

Additional packages were then installed:

```bash
# Client-side routing
npm install react-router-dom

# Icon library
npm install lucide-react
```

---

## 📦 Key Dependencies

```json
{
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-router-dom": "^7.18.1",
  "lucide-react": "^1.25.0",
  "vite": "^8.1.1"
}
```

---

## 📝 Notes

- All routing is **client-side** via React Router DOM. If deploying to a static host (e.g., Netlify, Vercel), configure it to redirect all requests to `index.html`.
- Styles are written in **plain CSS**, scoped per component, with global base styles in `index.css`.
- No TypeScript — the project uses plain JavaScript (`.jsx`).
