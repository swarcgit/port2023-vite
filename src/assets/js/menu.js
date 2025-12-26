/**
 * Initializes the mobile menu functionality.
 * This function sets up a click event listener on the menu toggle button
 * to show/hide the navigation menu and update accessibility attributes.
 *
 * @param {none} - This function does not accept any arguments.
 * @returns {void} - This function does not return a value.
 */
export function menu() {
  // Outputs the reference of the menu function to the console for tracking.
  console.log(menu);

  // Selects the menu toggle button element by its unique ID 'headerToggle'.
  const headerToggle = document.getElementById("headerToggle");
  // Selects the navigation container element using its CSS class '.header__nav'.
  const headerNav = document.querySelector(".header__nav");

  // Only proceed if the headerToggle element exists in the DOM.
  if (headerToggle) {
    /**
     * Attaches a click event listener to the toggle button.
     * When clicked, it toggles the visibility of the navigation and updates ARIA state.
     */
    headerToggle.addEventListener("click", () => {
      // Toggles the 'show' class on the navigation element to control its CSS display.
      headerNav.classList.toggle("show");

      /**
       * Updates the 'aria-expanded' attribute for accessibility.
       * If it's currently "true", set it to "false"; otherwise, set it to "true".
       */
      headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aria-expanded", "false")
        : headerToggle.setAttribute("aria-expanded", "true");
    });
  }
}
