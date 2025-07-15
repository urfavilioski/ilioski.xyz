particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 1000 } },
    color: { value: ["#b3d9ff", "#f9c5d1", "#ffffff", "#f9c5d1"]},
    shape: { type: "circle" },
    opacity: { value: 0.1, random: true },
    size: { value: 2, random: false },
    line_linked: { enable: true },
    move: { enable: true, speed: 0.6, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" }
    },
    modes: {
      bubble: { distance: 150, size: 2, duration: 2, opacity: 1 },
      repulse: { distance: 200 }
    }
  },
  retina_detect: true
});
