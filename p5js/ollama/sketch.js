let mImg;

function preload() {
  mImg = loadImage("../../imgs/GDTM.jpg");
}

function encodeImg(img) {
  img.loadPixels();
  let imgURL = img.canvas.toDataURL("image/jpeg");
  return imgURL.replace("data:image/jpeg;base64,", "");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
}

let mCaption = "";
function draw() {
  background(220);
  image(mImg, 0, 0);
  text(mCaption, 0, mImg.height + 4, width, 500);
}

async function mousePressed() {
  let response = await ollama.chat({
    model: "llava",
    messages: [{
      role: "user",
      content: "What is in this image?",
      images: [ encodeImg (mImg) ]
    }],
    options: { num_predict: 100 }
  });
  mCaption = response.message.content;

  let txtResponse = await ollama.chat({
    model: "llama3.2:1b",
    messages: [{ role: "user", content: "Who is Gudetama?" }],
    options: { num_predict: 120 }
  });

  mCaption += "\n\n---\n\n" + txtResponse.message.content;
}
