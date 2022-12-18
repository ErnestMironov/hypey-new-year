

function loader(delay) {
  const body = document.body;

  setTimeout(function () {
    body.classList.add('loading');
  }, delay);

  setTimeout(function () {
    body.classList.add('loaded');
  }, delay + 1700);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function generateLinkedInLink() {
  const btn = document.querySelector('#linkedInBtn');

  if (!btn) return;

  btn.setAttribute('href', `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)
}

function generateRandomPredictionLink() {
  const predictionBtn = document.querySelector('#predictionLink')

  function linkGenerator() {
    const predictionsLength = 19
    const randNumb = Math.trunc(Math.random() * predictionsLength)
    return window.location.pathname === `/hypey-new-year/predictions/prediction${randNumb}.html` ? linkGenerator() : `${window.location.origin}/hypey-new-year/predictions/prediction${randNumb}.html`
  }

  const predictionLink = linkGenerator()

  predictionBtn.setAttribute('href', predictionLink)
}

function shareOrCopyLink() {
  const copyBtn = document.querySelector('#copyBtn')

  if (navigator.share) {
    const shareData = {
      title: 'Hypey New Year',
      text: 'Learn web development on MDN!',
      url: location.href
    }

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.share(shareData);
        resultPara.textContent = 'MDN shared successfully';
      } catch (err) {
        resultPara.textContent = `Error: ${err}`;
      }
    });

    return
  }

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
  loader(10)
  smokeAnime();
  generateFbLink()
  generateLinkedInLink()
  generateRandomPredictionLink()
  shareOrCopyLink()
})