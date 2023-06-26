window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    color1: 0x0,
    color2: 0x0,
    alignment: 77.0,
    quantity: 2.0,
  });

  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = "blur(0px)";
  }, 100);
});
