window.addEventListener("scroll", () => {
  const heroImage = document.querySelector(".hero-image img");
  const offset = window.scrollY;
  heroImage.style.transform = `translateY(${offset * 0.2}px) scale(1.05)`;
});
