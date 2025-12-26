// Import the 'menu' module from menu.js to handle mobile menu toggling.
import { menu } from "./menu.js";
// Import the 'port' module from port.js to handle portfolio section interactions.
import { port } from "./port.js";
// Import the 'link' module from link.js to handle navigation links.
import { link } from "./link.js";
// Import the 'smooth' module from smooth.js to handle smooth scrolling effects.
import { smooth } from "./smooth.js";

/**
 * Attaches an event listener to the window object that triggers once all page content
 * (including CSS, images, and subframes) has finished loading.
 *
 * @param {string} "load" - The name of the event to listen for.
 * @param {function} anonymous - A callback function that initializes all application modules.
 */
window.addEventListener("load", function () {
  // Executes the smooth scroll initialization logic.
  smooth();
  // Executes the link/navigation initialization logic.
  link();
  // Executes the mobile menu initialization logic.
  menu();
  // Executes the portfolio section initialization logic.
  port();
});

// Prints "start" to the console to indicate that the main script execution has begun.
console.log("start");
