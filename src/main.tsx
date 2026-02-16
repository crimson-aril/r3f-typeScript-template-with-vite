// Import createRoot from React 18+ for rendering the app
import { createRoot } from 'react-dom/client';

// Loader from Drei shows a progress bar while your 3D assets load
import { Loader } from '@react-three/drei';

// Overlay is a custom component (probably some UI or HUD over the scene)
import Overlay from './Overlay.tsx';

// The main App component where your Canvas and 3D scene live
import App from './App.tsx';

// Import global CSS styles
import './styles.css';

// Grab the HTML element with id="root" from index.html
// The "!" tells TypeScript: "trust me, this element exists" (non-null assertion)
const rootElement = document.getElementById('root')!;

// Create a React root (required in React 18+)
// Then render the app inside it
createRoot(rootElement).render(
  <>
    {/* The main 3D scene */}
    <App />

    {/* Overlay UI (like text, HUD, or buttons above the canvas) */}
    <Overlay />

    {/* Drei's Loader shows loading progress for models, textures, and environment */}
    <Loader />
  </>
);
