
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log('Main.jsx loaded');
const root = document.getElementById("root");
console.log('Root element:', root);

if (root) {
  createRoot(root).render(<App />);
  console.log('App rendered');
} else {
  console.error('Root element not found!');
}
  





