class player{
    constructor(){
        var main=document.getElementById("main");
        main.style.height=screen.height+"px";
        if(screen.width<620){
            main.style.width=screen.width+"px";
        }
        var div=document.getElementById("div");
        div.style.height=screen.height-300+"px";
    }
}
onload=new player();
class dis{
    constructor(){
        this.ps=document.getElementById("buttons")
        this.o=document.getElementById("p");
        this.play=document.getElementById("play");
        this.play_pause=document.getElementById("audio");
        this.isplayed;
        this.play.addEventListener("click",()=>{
            this.played();
        });
        this.radio=[];
        this.radio[0]="music.m4a";
        this.radio[1]="meet.ogg";
        this.radio[2]="olddoll.ogg";
        this.names=[];
         this.names[0]="radio1";
         this.names[1]="radio2";
         this.names[2]="radio3";
        this.server=0;
        this.remeny(); 
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.radio.length-1){
                ++this.server;
                this.isplayed=false;
            }
            else{
                this.server=0;
            }
            localStorage.setItem("SAVE-POSITION",this.server);
            this.remeny();
        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isplayed=false;
            }
            else{
                this.server=this.radio.length-1;
            }
          localStorage.setItem("SAVE-POSITION",this.server);
            this.remeny();
        });
    }

    remeny(){
        if(localStorage.getItem("SAVE-POSITION")!=null){
            this.server=localStorage.getItem("SAVE-POSITION");
        }
     this.play_pause.src=this.radio[this.server];
     this.o.innerHTML=this.names[this.server];
     this.played();
    }
    played(){
        if(this.isplayed==false){
            this.play.src="pause.png";
            this.play_pause.play();
            this.isplayed=true;
        }
        else{
            this.play.src="play.png"
            this.play_pause.pause();
            this.isplayed=false;
        }
    }
}
onload=new dis()