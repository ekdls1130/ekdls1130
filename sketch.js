let img_nav;
let img_ad
let img_pro
let img_gnb;
let img_aiicon;
let img_green;
let img_text;
let state=0;

function preload(){
  img_nav=loadImage('01_NavBar.png')
  img_ad=loadImage('02_AdBanner.png')
  img_pro=loadImage('03_Product.png')
  img_gnb=loadImage('04_GNB.png')
  img_aiicon=loadImage('05_ai_icon.png')
  img_green=loadImage('06_green.png')
  img_text=loadImage('07_textbox.png')
}
function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state==0){
    image(img_nav,0,0,393,128);
    image(img_ad,0,128,393,284)
    image(img_pro,0,412,393,440);
    image(img_aiicon,320,688,60,60);
    image(img_gnb,0,748,393,104);}
  else if(state==1){
    image(img_nav,0,0,393,128);
    image(img_ad,0,128,393,284)
    image(img_pro,0,412,393,440);
    image(img_green,0,612,393,152);
    image(img_aiicon,320,688,60,60);
    image(img_gnb,0,748,393,104);
  }
}

function mouseClicked(){
  if(mouseX>=320&&mouseX<=380){
    if(mouseY>=600&&mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}
