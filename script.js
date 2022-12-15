

function smokeAnime() {
  const smoke = document.querySelector('#smoke');

  window.addEventListener('mousemove', (e) => {
    smoke.style.transform = `translate(${e.clientX / 5 * -1}px, ${e.clientY / 10}px)`;
  })
}

function generateFbLink() {
  const btn = document.querySelector('#fbBtn');

  if (!btn) return;

  btn.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)
}

function generateRandomPredictionLink() {
  const predictionBtn = document.querySelector('#predictionLink')

  function linkGenerator() {
    const predictionsLength = 19
    const randNumb = Math.trunc(Math.random() * predictionsLength)
    return window.location.pathname === `/prediction${randNumb}.html` ? linkGenerator : `${window.location.origin}/predictions/prediction${randNumb}.html`
  }

  const predictionLink = linkGenerator()
  console.log("🚀 ~ file: script.js:29 ~ generateRandomPredictionLink ~ predictionLink", predictionLink)

  predictionBtn.setAttribute('href', predictionLink)
}

function copyLink(element) {
  const copyBtn = document.querySelector('#copyBtn')

  copyBtn.addEventListener(
    'click',
    function (event) {
      if (!navigator.clipboard) {
        // Clipboard API not available
        return;
      }
      const text = location.href;
      try {
        navigator.clipboard.writeText(text);
        // document.getElementById('copy-status').innerText = 'Copied to clipboard';
        // setTimeout(function () {
        //   document.getElementById('copy-status').innerText = 'Click to copy';
        // }, 1200);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    },
    false
  );


}

window.addEventListener('DOMContentLoaded', (e) => {
  smokeAnime();
  generateFbLink()
  generateRandomPredictionLink()
  copyLink()
})