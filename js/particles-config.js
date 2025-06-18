particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#00f5ff" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.4,
      "random": true
    },
    "size": {
      "value": 2,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00f5ff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
