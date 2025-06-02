
function scrollToSection() {
  const section = document.getElementById("section-2");
  const offset = section.offsetTop;
  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
}
<script>
  const toggle = document.getElementById('mode-toggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });
</script>
