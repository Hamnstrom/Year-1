
let pumping=false;
let pumped=0;

let loopRunning = false;
let intervalId;

// toggle loop fill() function
function toggleLoop() {
    if (loopRunning) {  // *looprunning=true
        clearInterval(intervalId);
        loopRunning = false;
    } else {
        intervalId = setInterval(fill, 50); // interval in ms
        loopRunning = true;
    }
}
// button trigger
document.getElementById("toggleButton").addEventListener("click", toggleLoop);

// fill column with water
function fill(){
    
    if(pumped>=2000){
        pumped=2000
        clearInterval(intervalId)
    }
    else{
        pumped+=6.555
    }
    
    document.getElementById("status").textContent=`${pumped.toFixed(0)}ml`

    // loop change colors of divs
    for(let i=1;i<11;i++){
            if(pumped>=i*200){document.getElementById(`water${i}`).style.backgroundColor=`rgb(${i*10},${i*10},255)`}
            if(pumped>=i*200){document.getElementById(`water${i}`).style.opacity=`55%`}
    }
    
    /*
    // change colors of divs with gradients
    // loop version above
    if(pumped>=200){document.getElementById("water1").style.backgroundColor="rgb(0,0,255)"}
    if(pumped>=400){document.getElementById("water2").style.backgroundColor="rgb(10,10,255)"}
    if(pumped>=600){document.getElementById("water3").style.backgroundColor="rgb(20,20,255)"}
    if(pumped>=800){document.getElementById("water4").style.backgroundColor="rgb(30,30,255)"}
    if(pumped>=1000){document.getElementById("water5").style.backgroundColor="rgb(40,40,255)"}
    if(pumped>=1200){document.getElementById("water6").style.backgroundColor="rgb(50,50,255)"}
    if(pumped>=1400){document.getElementById("water7").style.backgroundColor="rgb(60,60,255)"}
    if(pumped>=1600){document.getElementById("water8").style.backgroundColor="rgb(70,70,255)"}
    if(pumped>=1800){document.getElementById("water9").style.backgroundColor="rgb(80,80,255)"}
    if(pumped>=2000){document.getElementById("water10").style.backgroundColor="rgb(90,90,255)"}
    else{null}
    */
}

// reset pumped value and clear columns
function clearWater(){
    pumped=0

    clearInterval(intervalId)
    loopRunning = false;

    document.getElementById("status").textContent=`${pumped.toFixed(0)}ml`
    
    for(let i=1;i<=10;i++){
        document.getElementById(`water${i}`).style.backgroundColor=""
        document.getElementById(`water${i}`).style.opacity=`100%`
    }
}
// button trigger
document.getElementById("clear").addEventListener("click",clearWater)

// change color of column, play sound and reload page
function boil(){
    if(pumped<=0){
        alert("no water")
    }
    else{
        clearInterval(intervalId)

        let rgbValue=0
        let boilColor=setInterval(() => {
            rgbValue++
            for(let i=1;i<11;i++){
                if(pumped>=i*200){document.getElementById(`water${i}`).style.backgroundColor=`rgb(${rgbValue*25},0,${255-rgbValue*25})`}

            }
    
        },1000);


        setTimeout( () => {
            new Audio("../Assets/boil.mp3").play();
        }, 7000)
    
        setTimeout(() => {
            clearInterval(boilColor)
        }, 10000);
        
        setTimeout(() => {
            window.location.reload()
        }, 13000);
    
    }

}
// button trigger
document.getElementById("boil").addEventListener("click", boil)
