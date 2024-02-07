
let prices=[
    {price:1.123,fuel:"95"},
    {price:2.345,fuel:"98"},
    {price:3.456,fuel:"Diesel"},
    {price:4.567,fuel:"E10"},
    {price:5.678,fuel:"CNG"}
]



//display prices in id's: 1-5
for(let i=0;i<5;i++){
    document.getElementById(i+1).innerHTML=prices[i].fuel+"="+prices[i].price+"/liter";
}

let mouseDown=0;
        
let pumped=0;
let price=2.123;
let limit;
limit=limit/price;
let finalPrice=pumped*price;

function pump(){

    if(pumped<limit){
        pumped+=0.027284584;
    }
    else if(pumped>limit){
        pumped=limit
    }
    else{
        console.log("error01")
    }

    console.log(pumped)
}

function pumpCheck(){
    if(mouseDown==1){
        pump()
    }
    else{
        null
    }
    let finalPrice=pumped*price;
    document.getElementById("out").innerHTML=`Pumped: ${pumped.toFixed(3)}L`
    document.getElementById("outprice").innerHTML=`Price: ${finalPrice.toFixed(2)}€`
}

setInterval(pumpCheck, 2)