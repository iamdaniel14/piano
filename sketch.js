//inspiration :https://openprocessing.org/sketch/611472.
//music string
//01/06/2024


let waveType="triangle";

let particles=[];

const NOTE_NAME =["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G5","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7"];


const MID_NOTE_NUMBER_WHITE_KEY= [48,50,52,53,55,57,59,60,62,64,65,67,69,71,72,74,76,77,79,81,83,84,86,88,89,91,93,95,96,98,100,101];
const MID_NOTE_NUMBER_BLACK_KEY= [49,51,54,56,58,61,63,66,68,70,73,75,78,80,80,82,85,87,90,92,94,97,99];

const SELECT_WAVE=document.querySelector (".select_wave");
// const BUTTON=document.querySelector (".wave_button");
document.addEventListener ("DOMContentLoaded", (event)=>{
  const SELECT_WAVE=document.querySelector (".select_wave");
  SELECT_WAVE.addEventListener("change", (event)=>{

   waveType=event.target.value;
  })

})




  let osc;
  let rectangle=[];
  let blackRect=[]
  let rectScale;
  let octave=5;
  let numberOfKeys=7;
  let total=numberOfKeys*octave;  // one octave has 7  white keys  and 5 white keys
   function setup() {
  createCanvas(windowWidth,windowHeight);

let w=windowWidth;
    rectScale=Math.floor((w/octave)/7); //rect scale in relationship with window width ,number of octave ,number of keys
         for (let i=0; i<total;i++) {
        rectangle.push(new Keys (i*rectScale,height*0.6,rectScale,rectScale*4, "white",MID_NOTE_NUMBER_WHITE_KEY[i],NOTE_NAME[i]));    
         }
    
  for (let i=0; i<total;i++) {
        if (i%7!==2 && i%7 !==6  ){ // if the reminder is not 2 and 6
        blackRect.push (new Keys  (i*rectScale+rectScale*0.7,height*0.6,rectScale*0.5,rectScale*2,"black",MID_NOTE_NUMBER_BLACK_KEY[i]));    
   } 
  }
     
     
   }
  
  function draw() {
  background(0);
 let blackKeyIsActive=false;
 let  mousePosition=createVector(mouseX,mouseY);

 for (let i=0; i<particles.length; i++) {
  particles[i].show ();
  particles[i].update ();
  if ( particles[i].finished()) {
    particles.splice(i,1)
  }
}

  for (let j=0; j<blackRect.length; j++) 
  {if (mouseIsPressed &&mousePosition.x>=blackRect[j].x&&mousePosition.x<=blackRect[j].x+blackRect[j].w&&mousePosition.y>=blackRect[j].y&&mousePosition.y<=blackRect[j].y+blackRect[j].h  ) { // if the mouse is inside the black key
  blackRect[j].col=("Plum") ;
  blackKeyIsActive=true;  
  blackRect[j].playSound (waveType);
  particles.push(new Particles (blackRect[j].x+blackRect[j].w/2,100));
  console.log (blackRect[j].x)
console.log(blackRect[j].x+blackRect[j].w)

    }  else {
      
  blackRect[j].col="black" ;
  blackRect[j].stopSound ();
    }
    }  
    
   for (let i=0; i<rectangle.length; i++) {
  {if (mouseIsPressed &&  mousePosition.x>= rectangle[i].x&&mousePosition.x<= rectangle[i].x+ rectangle[i].w&&mousePosition.y>= rectangle[i].y&&mousePosition.y<= rectangle[i].y+rectangle[i].h && !blackKeyIsActive) {
  rectangle[i].col="Lavender";
  rectangle[i].playSound (waveType);


    particles.push(new Particles (rectangle[i].x+rectangle[i].w/2,50));

    console.log (particles.length);
  
  
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
 
  }




}
