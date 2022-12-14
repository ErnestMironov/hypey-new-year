

function smokeAnime() {
  const smoke = document.querySelector('#smoke');

  window.addEventListener('mousemove', (e) => {
    smoke.style.transform = `translate(${e.clientX / 5 * -1}px, ${e.clientY / 10}px)`;
  })
}

window.addEventListener('DOMContentLoaded', (e) => {
  smokeAnime();
})