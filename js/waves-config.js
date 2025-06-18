tsParticles.load("tsparticles", {
  fullScreen: false,
  background: {
    color: {
      value: "transparent"
    }
  },
  particles: {
    number: {
      value: 50,
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: ["#ff4500", "#ff8c00", "#ffa500"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.7,
      random: true
    },
    size: {
      value: 4,
      random: { enable: true, minimumValue: 1 }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false }
    }
  },
  detectRetina: true

});