class Particles {
constructor (x,y){
this.pos=createVector(x,y);
this.acc=createVector (0,0);
this.vel=createVector (0,random(3));

this.col=random (200)
this.alpha=255;


this.alphaDecrement =random (3)
}
show (){
push ()
noStroke ();   
fill (this.col,200,200,this.alpha)
circle (this.pos.x,this.pos.y, 10);
pop ()
 }

 update (){
this.pos.add (this.vel);
this.vel.add (this.acc);
this.acc.set (0,0);
this.alpha-=1;

 }

 finished  () {
return this.alpha<0;
 }


}