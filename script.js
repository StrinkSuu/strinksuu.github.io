
function scrollToSection() {
  const section = document.getElementById("section-2");
  const offset = section.offsetTop;
  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
}
