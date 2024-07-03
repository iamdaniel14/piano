 class Keys {
   
  constructor (x,y,w,h,col,note,noteName) {
    
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.col=col;
  this.note=note;
  this.noteName =noteName;
  this.attackLevel=0.5;
  this.releaseLevel =0;

  this.attack=0.01;
  this.decay=0.1; 
  this.sustain=0.2;
  this.release =0;

this.envelope=new p5.Envelope ();
this.envelope.setADSR (this.attack,this.decay,this.sustain, this.release);
this.envelope.setRange (this.attackLevel,this.releaseLevel);


  this.osc=new p5.Oscillator();
  this.osc.start ();
  this.osc.amp(this.envelope);
  this.osc.freq(midiToFreq(this.note));

  }
   
   
   show (){
  fill(this.col)
  rect (this.x,this.y,this.w, this.h);
  textSize (20);
  fill ("grey")  
  text (this.noteName,this.x,this.y+this.h*0.8)
  
   }
   
   playSound (wave_type){
   this.osc.setType (wave_type) 
  //  this.osc.amp(1,0.1)

  this.envelope.play ()
   }
   
   
   stopSound (){
   this.osc.amp(0,0.1)
   }
   

 }