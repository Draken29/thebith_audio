class po{
    constructor(){
        var main=document.getElementById("main1");
        main.style.height=screen.height+"px";
    if(screen.width<620){
        main.style.width=screen.width+"px";
    }
    var div=document.getElementById("div");
    div.style.height=screen.height-300+"px";
}
}
onload=new po();

class py{
    constructor(){
        this.play=document.getElementById("play");
        this.audio=document.getElementById("audio");
        this.isplayed;
        this.play.addEventListener("click",()=>{
            this.player();
        })
    }
    player(){
        if(this.isplayed==false){
            this.play.src="pause.png";
            this.audio.play();
            this.isplayed=true;
        }
        else{
            this.play.src="play.png";
            this.audio.pause();
            this.isplayed=false;
        }
    }
    }
    onload=new py();