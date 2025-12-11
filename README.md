# Portfolio Website Project

This tutorial introduces how to create a single website using various frameworks.
Web developers often work with diverse frameworks.
Throughout this process, you will learn how to apply various frameworks,
compare and analyze the strengths and weaknesses of each framework, and learn from them.

1. Create a site using [vite](https://github.com/webstoryboy/port2023-vite).
2. Create a site using [react.js](https://github.com/webstoryboy/port2023-react).
3. Create a site using [vue.js](https://github.com/webstoryboy/port2023-vue).
4. Create a site using [next.js](https://github.com/webstoryboy/port2023-next).

This tutorial creates a portfolio-concept site repeatedly in 4 versions, serving as a starting point for frontend development.
You will learn how to efficiently build sites using JavaScript frameworks.
Rather than learning in depth, this tutorial is designed to develop a sense of flow and understanding by using various methods.

## View Completed Work

Preview:

## Tech Stack

- [vite](https://vitejs.dev/) is used to bundle and manage the site.
- [gsap](https://greensock.com/gsap) is used to provide parallax effects.
- [lenis](https://lenis.studiofreight.com/) is used to implement smooth scrolling effects.
- [netlify](https://www.netlify.com/) is used to deploy the site.
- [git](https://github.com/) is used to manage files.
- HTML and CSS are used to design the basic layout of the website, while adhering to web standards and web accessibility. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## Run the Project

- Install vite: `npm create vite@latest`
- Install gsap: `npm install gsap`
- Install lenis: `npm install @studio-freight/lenis`
- After installing vite, configure the environment by creating a `vite.config.js` file and writing it as follows:

```javascript
export default {
  root: "src",
  build: {
    outDir: "../public",
  },
};
```
