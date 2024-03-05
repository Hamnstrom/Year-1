
let pumping=false;
let pumped=0;

let loopRunning = false;
let intervalId;


function toggleLoop() {
    if (loopRunning) {  // *looprunning=true
        clearInterval(intervalId);
        loopRunning = false;
    } else {
        intervalId = setInterval(fill, 50); // interval in ms
        loopRunning = true;
    }
}

document.getElementById("toggleButton").addEventListener("click", toggleLoop);


function fill(){
    
    if(pumped>=2000){
        pumped=2000
        clearInterval(intervalId)
    }
    else{
        pumped+=6.555
    }

    document.getElementById("status").textContent=`${pumped.toFixed(2)}ml`

    for(let i=1;i<11;i++){
        if(pumped>=i*200){document.getElementById(`water${i}`).style="background-color:blue;"}
    }


}
function clearWater(){
    pumped=0

    clearInterval(intervalId)
    loopRunning = false;

    document.getElementById("status").textContent=`${pumped.toFixed(2)}ml`
  
    for(let c=1;c<=10;c++){
        document.getElementById(`water${c}`).style=""
    }
}

document.getElementById("clear").addEventListener("click",clearWater)


function boil(){

    setTimeout(() => {
        new Audio("../Assets/explosion.mp3").play();
    }, 10000);

    setTimeout(() => {
        window.location.reload()
    }, 13000);
}

document.getElementById("boil").addEventListener("click", boil)
