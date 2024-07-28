class volum{
    constructor(){
        this.audio=document.getElementById("audio");
        this.audio.volume=50/100;
        this.volume_id=document.getElementById("volume_id");
        this.volume_id.addEventListener("change",()=>{
            this.audio.volume=this.volume_id.value/100;
        });
        this.volume_speed=document.getElementById("volume_speed");
        this.volume_speed.playbackRate=1;
        this.volume_speed.addEventListener("change",()=>{
            this.audio.playbackRate=this.volume_speed.value/100;
        });

    //     this.color=document.getElementById("color1");
    //     this.body=document.getElementById("body");
    //     this.color.addEventListener("change",()=>{
    //     this.body.style.background=this.color.value;
    // });
    }

}
onload=new volum();