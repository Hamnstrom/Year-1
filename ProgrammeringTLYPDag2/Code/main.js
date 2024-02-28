console.log("helo")


// set game rules
function gamemode(option1){
    console.log(option1)
    let num=0; let rowLen=0; let bonus=0

    switch(option1){
        case "lotto":num=40, rowLen=7, bonus=2; break;
        case "euro":num=50, rowLen=5, bonus=5; break;
        case "viking":num=33, rowLen=13, bonus=3; break;
        case "keno":num=80, rowLen=10, bonus=0; break;
    }
    console.log(`allowed num:1-${num} row length:${rowLen} bonus numbers:${bonus}`)
}

// set row gen count with button
function genRow(){
    rowCount=parseFloat(document.getElementById("rowcount").textContent)
    console.log(`${rowCount}`)
}

