import "../styles/styles.css";
import "@picocss/pico/css/pico.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  console.log("Hello world, browser :-)");
  AOS.init({
    duration: 600, // Duration of the animations
    easing: 'ease-in-out', // Easing function
    once: false, // Whether animation should happen only once or every time you scroll up/down
  });
}
