# 3D Portfolio Website

A modern, interactive portfolio website showcasing projects, skills, and experience with stunning 3D elements and animations.

## ✨ Features

- **Interactive 3D Elements** - Engaging 3D models and environments using React Three Fiber and Drei
- **Animated UI** - Smooth animations and transitions powered by GSAP
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark Theme** - Modern dark theme with carefully designed color palette
- **Contact Form** - Functional contact form integration with EmailJS
- **Project Showcase** - Dynamic project cards with animated hover effects
- **Tech Stack Display** - Interactive 3D models showcasing technical skills
- **Performance Optimized** - Fast loading and rendering with optimized 3D assets

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **3D Rendering**: 
  - Three.js
  - React Three Fiber (@react-three/fiber)
  - Drei (@react-three/drei)
  - Post-processing effects (@react-three/postprocessing)
- **Styling**: 
  - TailwindCSS 4
  - Custom CSS animations
- **Animations**: 
  - GSAP (GreenSock Animation Platform)
  - React CountUp
- **Form Handling**: EmailJS
- **Responsive Design**: React Responsive
- **Development Tools**:
  - ESLint
  - Modern JavaScript (ES Modules)

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/Portfolio-3D.git
   cd Portfolio-3D
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file with your EmailJS credentials
   ```
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, ready to be deployed.

## 🔍 Project Structure

- `src/`
  - `components/` - Reusable UI components
  - `sections/` - Main page sections
  - `constants/` - Data and configuration
  - `App.jsx` - Main application component
  - `index.css` - Global styles
- `assets/`
  - `public/`
    - `images/` - Static images
    - `models/` - 3D models (GLB format)

## 👤 Author

Portfolio created by Utkrist Jaiswal

---

*This project was bootstrapped with Vite.*
