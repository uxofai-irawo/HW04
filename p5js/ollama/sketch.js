let mImg;
let mOllama;

let mDim;

let mInput;
let mButton;

let API_URL = "https://karaoke-kerry-partially-telephony.trycloudflare.com/";

async function preload() {
  mImg = loadImage("../../imgs/GDTM.jpg");
  mOllama = new Ollama({ host: API_URL });
}

function encodeImg(img) {
  img.loadPixels();
  let imgURL = img.canvas.toDataURL("image/jpeg");
  return imgURL.replace("data:image/jpeg;base64,", "");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(12);
  mDim = min(width / 2 - 8, (height - 32) / 2 - 8);

  mInput = createInput("Type how you're feeling...");
  mInput.position(4, 4);
  mInput.size(2 * mDim + 4, 24);

  mButton = createButton("Generate");
  mButton.position(2 * mDim + 12, 4);
  mButton.mousePressed(runGenerate);
}

let mCaption = "";
function draw() {
  background(220);
  /*
  image(mImg, 0, 0);
  */
  text(mCaption, 30, 50, width*0.75, windowHeight);
}

async function runGenerate() {
  
  let txtResponse = await mOllama.chat({
    model: "Ex-Rockstar/sahara:latest",
    messages: [{ role: "user", content: mInput.value() }],
    options: { num_predict: 300 }
  });

  mCaption += "You: " + mInput.value() + "\n\n" + "HugBot: " + txtResponse.message.content + "\n---\n";
  print(mInput.value());
  print(txtResponse.message.content);
}