// Import hooks and helpers from React Three Fiber and Drei
import { useThree } from "@react-three/fiber";  // gives access to the scene, camera, renderer, etc.
import { Sky, Environment } from "@react-three/drei"; // Sky and Environment helpers

export default function CityEnvironment() {
  // Grab the scene object from R3F
  const { scene } = useThree();

  // Clear previous scene background and fog
  // Useful if you want to fully control the look of the environment
  scene.background = null;
  scene.fog = null;

  return (
    <>
      {/* Sky component simulates realistic sky lighting and atmosphere */}
      {/* distance: how far the sky dome is from the camera */}
      {/* sunPosition: 3D position of the sun in the sky */}
      {/* inclination & azimuth: control sun angle and rotation */}
      {/* turbidity: haziness of the atmosphere */}
      {/* rayleigh: scattering effect for blue sky */}
      {/* mieCoefficient & mieDirectionalG: simulate how particles scatter light */}
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0.49}
        azimuth={0.25}
        turbidity={8}
        rayleigh={0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Environment component applies HDR lighting and reflections */}
      {/* 'files' points to an HDR texture for realistic reflections */}
      <Environment files="textures/potsdamer_platz_1k.hdr" />

      {/* Ground plane */}
      {/* A simple flat plane that receives shadows */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]} // Rotate plane to lie flat on XZ axis
        position={[0, -3, 0]}          // Lower it slightly below the origin
        receiveShadow                 // Makes shadows appear on the plane
      >
        {/* Geometry defines the size of the plane */}
        <planeGeometry args={[50, 50]} />
        {/* Material defines color and surface properties */}
        <meshStandardMaterial color="#7CFC00" roughness={0.8} />
      </mesh>

      {/* Ambient light illuminates all objects equally */}
      {/* Provides base lighting so shadows aren’t completely black */}
      <ambientLight intensity={0.35} />

      {/* Directional light 1 (like the sun) */}
      {/* castShadow enables shadows from this light */}
      {/* shadow-mapSize: resolution of shadow texture (higher = sharper shadows) */}
      {/* shadow-camera defines the area the shadow covers */}
      {/* shadow-bias helps prevent shadow artifacts like flickering or z-fighting */}
      <directionalLight
        castShadow
        position={[30, 20, 10]}
        intensity={1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-bias={-0.0005}
      />

      {/* Directional light 2 for softer shadows and better lighting balance */}
      <directionalLight
        castShadow
        position={[-30, 20, -10]}
        intensity={0.5}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-bias={-0.0005}
      />
    </>
  );
}
