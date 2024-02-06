// enable aos
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// document.querySelector('.theme-toggle-button').addEventListener(
//   'click', () => {
//     document.body.classList.toggle('dark')
//   }
// )

// enable theme switching
const themeicon = document.querySelectorAll('.theme-toggler-icon');
const dropdown = document.querySelectorAll('.dropdown');
const carousel = document.querySelectorAll('.carousel');
const navbaricon = document.querySelectorAll('.navbar-toggler-icon');
const logoicon = document.querySelectorAll('.logo');
const gradio = document.querySelectorAll('.gradio');

const themes = {
  light: {
    '--color-body': '#373d3e',
    '--color-heading': '#171715',
    '--color-base2': '#ebebeb',
    '--color-base': '#ffffff',
    '--color-brand': '#124559',
    // '--color-brand': '#42c3d9',
    // '--color-brand': '#5fcff6',
    // '--color-brand': '#00a8ff',
    // '--color-brand': '#dcc193',
    '--color-brand2': '#000000',
  },
  dark: {
    '--color-body': '#b6cbce',
    '--color-heading': '#eef3db',
    '--color-base': '#151515',
    '--color-base2': '#0c0c0c',
    '--color-brand': '#fef417',
    '--color-brand2': '#ffffff',
  },
};

[...document.querySelectorAll('.theme-toggler-button')].forEach(el => {
  el.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      const theme = themes[newTheme];

      // const theme = themes[el.dataset.theme];
      for (var variable in theme) {
          document.querySelector(":root").style.setProperty(variable, theme[variable]);
      };
      document.documentElement.setAttribute('data-theme', newTheme);

      // Update additional elements with data-bs-theme attribute
      // gradio.forEach(element => {
      //   element.setAttribute('theme-mode', newTheme);
      // });
      dropdown.forEach(element => {
        element.setAttribute('data-bs-theme', newTheme);
      });
      carousel.forEach(element => {
        element.setAttribute('data-bs-theme', currentTheme);
      });
      navbaricon.forEach(element => {
        element.classList.toggle('light');
      });
      themeicon.forEach(element => {
        element.classList.toggle('light');
        if(element.classList.contains('light')){
          // element.src = "assets/images/day-mode.png";
          element.classList.remove('la-star-and-crescent');
          element.classList.add('la-sun');
        }else{
          element.classList.remove('la-sun');
          element.classList.add('la-star-and-crescent');
        };
      });
      logoicon.forEach(element => {
        element.classList.toggle('light');
        if(element.classList.contains('light')){
          element.src = "assets/images/akag-g-only.png";
        }else{
          element.src = "assets/images/akag-g-only.png";
        };
      });
  });
});