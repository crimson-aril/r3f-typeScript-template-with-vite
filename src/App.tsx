// Import the Canvas component from React Three Fiber (R3F) which is the main 3D rendering container
import { Canvas } from '@react-three/fiber';

// Import a custom component for the city environment (like lights, buildings, sky, etc.)
import CityEnvironment from './CityEnvironment';

// Import some helper components from Drei (a collection of useful R3F tools)
import {
  OrbitControls,       // Lets you move/rotate/zoom the camera with your mouse
  PerspectiveCamera    // A camera with perspective projection (like the human eye)
} from '@react-three/drei';

// Import your Box component from Scene.tsx (probably a simple 3D cube)
import { Box } from './Scene';

// Main App component
function App() {
  return (
    // Canvas is like the <canvas> element in HTML, but with React integration
    // 'shadows' enables shadow rendering
    // 'flat' disables tone mapping for simpler colors
    <Canvas shadows flat>
      
      {/* OrbitControls allow the user to interact with the scene */}
      {/* maxDistance and minDistance limit how far/close you can zoom */}
      <OrbitControls maxDistance={50} minDistance={10} />

      {/* Ambient light lights the entire scene evenly */}
      {/* intensity is set to Math.PI / 2 for strong illumination */}
      <ambientLight intensity={Math.PI / 2} />

      {/* A group is like a container for multiple objects */}
      {/* Here we're scaling the whole group up by 20 */}
      {/* Position sets the center of the group in 3D space */}
      <group scale={20} position={[0, 0, 0]}>
        
        {/* Box is your cube object */}
        {/* You can set its position relative to the group and scale individually */}
        <Box position={[0, 0, 0]} scale={0.15} />
      </group>

      {/* Add your city environment component (likely contains sky, buildings, and lights) */}
      <CityEnvironment />

      {/* PerspectiveCamera creates a camera with depth perception */}
      {/* makeDefault means this camera will be used automatically */}
      {/* position sets where the camera starts in the 3D world */}
      <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
    </Canvas>
  );
}

// Export App so it can be used in index.tsx
export default App;
