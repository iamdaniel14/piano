//inspiration :https://openprocessing.org/sketch/611472.
//music string
//01/06/2024


let waveType;

const NOTE_NAME =["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G5","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6"];


const MID_NOTE_NUMBER_WHITE_KEY= [48,50,52,53,55,57,59,60,62,64,65,67,69,71,72,74,76,77,79,81,83,84,86,88,89,91,93,95];
const MID_NOTE_NUMBER_BLACK_KEY= [49,51,54,56,58,61,63,66,68,70,73,75,78,80,80,82,85,87,90,92,94];

const SELECT_WAVE=document.querySelector (".select_wave");
const BUTTON=document.querySelector (".wave_button");
BUTTON.addEventListener ("click", ()=>{
waveType=SELECT_WAVE.value;

})




  let osc;
  let rectangle=[];
  let blackRect=[]
  let rectScale=50;
  let octave=4;
  let total=7 *octave;  // one octave has 7  keys 
   function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i=0; i<total;i++) {
  rectangle.push(new Keys (i*rectScale,height*0.5,rectScale,rectScale*4, "white",MID_NOTE_NUMBER_WHITE_KEY[i],NOTE_NAME[i]));    
   }
     
     
     
  for (let i=0; i<total;i++) {
    
  if (i%7!==2 && i%7 !==6  ){ // if the reminder is not 2 and 6
  blackRect.push (new Keys  (i*rectScale+rectScale*0.7,height*0.5,rectScale*0.5,rectScale*2,"black",MID_NOTE_NUMBER_BLACK_KEY[i]));    
   } 
  }
     
     
   }
  
  function draw() {
  background(220);
 let blackKeyIsActive=false;
 let  mousePosition=createVector(mouseX,mouseY);

  for (let j=0; j<blackRect.length; j++) 
  {if (mouseIsPressed &&mousePosition.x>=blackRect[j].x&&mousePosition.x<=blackRect[j].x+blackRect[j].w&&mousePosition.y>=blackRect[j].y&&mousePosition.y<=blackRect[j].y+blackRect[j].h  ) { // if the mouse is inside the black key
  blackRect[j].col="red" ;
  blackKeyIsActive=true;  
  blackRect[j].playSound (waveType);

    }  else {
      
  blackRect[j].col="black" ;
  blackRect[j].stopSound ();
    }
    }  
    
   for (let i=0; i<rectangle.length; i++) {
  {if (mouseIsPressed &&  mousePosition.x>= rectangle[i].x&&mousePosition.x<= rectangle[i].x+ rectangle[i].w&&mousePosition.y>= rectangle[i].y&&mousePosition.y<= rectangle[i].y+rectangle[i].h && !blackKeyIsActive) {
  rectangle[i].col="yellow";
  rectangle[i].playSound (waveType);


  
    } else {
    rectangle[i].col="white" ;
    rectangle[i].stopSound ();
    }
   }  
    
    
   for (let i=0; i<rectangle.length; i++) {
   rectangle[i].show ();
    }  
  
  for (let j=0; j<blackRect.length; j++) {
  blackRect[j].show();

    }  
 
  }}
