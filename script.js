

function smokeAnime() {
  const smoke = document.querySelector('#smoke');

  window.addEventListener('mousemove', (e) => {
    smoke.style.transform = `translate(${e.clientX / 10 * -1}px, ${e.clientY / 10}px)`;
  })
}

function fillPrediction() {
  if (!location.pathname.includes('prediction')) {
    return
  }

  const predictions = [
    {
      caption: 'Lorem',
      desc: 'ipsum',
      src: 'https://firebasestorage.googleapis.com/v0/b/hyperfactory-1c07e.appspot.com/o/stickers.png?alt=media&token=0c5c074a-bba2-4b1c-9654-e88c73a9fc0b'
    },
    {
      caption: 'Lorem ipsum dolor amet, consectetur adipiscing elit',
      desc: 'ipsum',
      src: 'https://firebasestorage.googleapis.com/v0/b/hyperfactory-1c07e.appspot.com/o/stickers.png?alt=media&token=0c5c074a-bba2-4b1c-9654-e88c73a9fc0b'
    },
    {
      caption: 'sit',
      desc: 'ipsum',
      src: 'https://firebasestorage.googleapis.com/v0/b/hyperfactory-1c07e.appspot.com/o/appleHomePod.png?alt=media&token=bb322dce-07bb-4c77-96f9-a8f9701d2fa9'

    },
    {
      caption: 'amet',
      desc: 'ipsum',
      src: 'https://firebasestorage.googleapis.com/v0/b/hyperfactory-1c07e.appspot.com/o/appleHomePod.png?alt=media&token=bb322dce-07bb-4c77-96f9-a8f9701d2fa9'
    },
  ]

  const caption = document.querySelector('#predictionCaption');
  const description = document.querySelector('#predictionDescription')
  const img = document.querySelector('#predictionImg')

  const prediction = predictions[Math.trunc(Math.random() * predictions.length)]

  caption.innerHTML = prediction.caption
  img.setAttribute('src', prediction.src)
}

window.addEventListener('DOMContentLoaded', (e) => {
  smokeAnime();
  fillPrediction()
})