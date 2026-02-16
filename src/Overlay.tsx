// Import motion from Framer Motion for animations
import { motion } from 'framer-motion';

// Define the props for the Overlay component
// title is optional; if not provided, a default is used
interface OverlayProps {
  title?: string;
}

// Overlay component shows a fullscreen text overlay on top of your 3D scene
export default function Overlay({
  title = 'R3F + Typescript Template' // default title
}: OverlayProps) {
  return (
    // Fullscreen div positioned absolutely over the canvas
    // 'uppercase' makes all letters capital, 'tracking-widest' spreads the letters
    <div className="absolute top-0 left-0 w-full h-full uppercase tracking-widest">
      
      {/* Motion div animates its opacity using Framer Motion */}
      <motion.div
        whileInView={{ opacity: 1 }}   // fade in when in view
        initial={{ opacity: 0 }}       // start fully transparent
        transition={{ delay: 1 }}      // wait 1 second before fading in
        className="flex flex-col items-center space-y-2 justify-center" // center content vertically & horizontally
      >
        {/* Main title */}
        <h1 className="text-2xl font-lazydog font-semibold">{title}</h1>

        {/* Subtitle */}
        <p className="italic font-lazydog">by crimson-aril</p>
      </motion.div>
    </div>
  );
}
