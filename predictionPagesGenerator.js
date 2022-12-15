fs = require('fs');
predictions = require('./predictions.js')
// var dir = './predictions';

function fileHandler() {
  // writeFile function with filename, content and callback function
  predictions.predictions.forEach((pred, idx) => {

    fs.writeFile(`predictions/prediction${idx}.html`, `
    <!DOCTYPE html>
      <html html lang = "en" >
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Hypey New Year" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="${pred.img}"/>
          <meta property="og:description" content="${pred.description}"/>
          <meta property="og:site_name" content="HypeFactory"/>
          <title>HypeFactory | Prediction</title>
          <link rel="stylesheet" href="../style.css" />
          <link rel="shortcut icon" href="../assets/icon.png" type="image/x-icon" />
        </head>
        <body>
          <main>
            <a href="/">
              <img src="../assets/logo.svg" alt="Logo hypeFactory" class="logo" />
            </a>
            <section class="prediction">
              <div>
                <h1 id="predictionCaption" class="prediction__title">
                  Hypey New Year
                </h1>
                <p id="predictionDescription" class="desc prediction__desc">
             ${pred.description}
                </p>
                	<div class="action-list">
                    <a href="/" id="predictionLink" class="ellipse-btn">Get another</a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://ernestmironov.github.io/hypey-new-year/predictions/prediction0.html"
                      target="_blank"
                      class="circle-btn"
                      id="fbBtn"
                    >
                      <img src="../assets/facebook.svg" alt="facebook share" />
                    </a>
                    <button class="circle-btn">
                      <img src="../assets/linkedin.svg" alt="linkedin share" />
                    </button>
                    <button id="copyBtn" class="circle-btn">
                      <img src="../assets/copy.svg" alt="copy link" />
                    </button>
                  </div>
              </div>
              <div class="prediction__image-box">
                <img
                  src="../assets/rounded-text_prediction.svg"
                  alt="Hypey New Year"
                  class="prediction__rounded-text"
                />
                <img id="predictionImg" src="${pred.img}" alt="" class="prediction__image" />
              </div>
            </section>
          </main>
          <div class="smoke">
            <picture>
              <source
                media="(min-width: 800px)"
                srcset="../assets/smoke.webp"
                type="image/webp"
              />
              <img id="smoke" src="../assets/smoke.png" alt="" />
            </picture>
          </div>
          <script src="../script.js" type="module"></script>
        </body>
      </html >
    `, function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    });

  })

}

fileHandler()