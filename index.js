let timer=new time();
function time()
{   
    let running;
    let closetime=0,duration=0,startduration;
    let startTime=document.querySelector(".StartTime");
    let closeTime=document.querySelector(".duration");
    this.durationCalc=()=>{
        if(running==true){
            duration=duration+1;
            closeTime.innerHTML=(duration);    
        }
            
    }
    this.start=()=>{
        if(running==true){
            alert("You already started");
            throw new error("You already started");
        }
        running=true;
        console.log("start");
        startTime.innerHTML=(closetime);
        startduration=setInterval(() => {
            this.durationCalc();
        }, 1000);
    }
    this.stop=()=>{
        if(!running){
            alert("You should start the timer to stop that.");
            throw new Error("You should start the timer to stop that.");
        }
        running=false;
        clearInterval(startduration);
        console.log("stoped");
        closetime=duration;
    }
    this.reset=()=>{
        closetime=0;
        running=false;
        duration=0;
        console.log("reset");
        if(startduration){
            clearInterval(startduration);
        }
        closeTime.innerHTML=0;
        startTime.innerHTML=0;
    }
}


