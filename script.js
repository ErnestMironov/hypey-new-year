const smoke = document.querySelector('#smoke');

window.addEventListener('mousemove', (e) => {
  console.log('====================================');
  console.log(e);
  console.log('====================================');
  smoke.style.transform = `translate(${e.clientX / 10 * -1}px, ${e.clientY / 10}px)`;
})