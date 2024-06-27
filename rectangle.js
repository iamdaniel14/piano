 class Keys {
   
  constructor (x,y,w,h,col,note,noteName) {
    
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.col=col;
  this.note=note;
  this.noteName =noteName;
    
  this.osc=new p5.Oscillator();
    this.osc.start ();
  this.osc.amp(0);
  this.osc.freq(midiToFreq(this.note))
    
  }
   
   
   show (){
  fill(this.col)
  rect (this.x,this.y,this.w, this.h);
  textSize (20);
  fill ("grey")
     
 text (this.noteName,this.x,this.y+this.h*0.8)
  
   }
   
   playSound (){
     
   this.osc.amp(1,0.1)
   }
   
   
   stopSound (){
     
   this.osc.amp(0,0.1)
   }
   

 }