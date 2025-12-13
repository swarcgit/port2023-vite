// Import the menu functionality module
import { menu } from "./menu.js";
// Import the portfolio functionality module
import { port } from "./port.js";
// Import the link/navigation functionality module
import { link } from "./link.js";
// Import the smooth scrolling functionality module
import { smooth } from "./smooth.js";

// Wait for the entire page and all resources to finish loading
window.addEventListener("load", function () {
  // Initialize smooth scrolling behavior
  smooth();
  // Initialize navigation link functionality
  link();
  // Initialize mobile menu functionality
  menu();
  // Initialize portfolio section functionality
  port();
});

// Log application startup message to console
console.log("start");
