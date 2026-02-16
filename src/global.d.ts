// This is a TypeScript declaration file
// It tells TypeScript how to handle imports that aren’t TypeScript by default

// Here, we declare that any import ending in '.css' is a module
// Without this, TypeScript would throw an error if you try:
// import './styles.css';
declare module '*.css';
