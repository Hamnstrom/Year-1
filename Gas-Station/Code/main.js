
let prices=[
    {price:1.779,fuel:"95E10"},
    {price:1.859,fuel:"98E"},
    {price:1.879,fuel:"Diesel"},
    //{price:"helo",fuel:"E10"},
    {price:0.987,fuel:"CNG"}
]



//display prices in id's: 1-5
for(let i=0;i<4;i++){
    document.getElementById(i+1).innerHTML=prices[i].fuel+"="+prices[i].price+"/liter";
}

let mouseDown=0;
let pumped=0;
let price=1.111;
let limit01=0;

let finalPrice=pumped*price;

function pump(){
    let newPumped = pumped + 0.009284584; // Calculate the pumped amount without modifying pumped directly

    if (newPumped * price <= limit01) {
        pumped = newPumped; // Update pumped only if finalPrice is within the limit
    } else {
        pumped = limit01 / price; // Set pumped to the maximum value allowed by the limit
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
setInterval(pumpCheck, 10)


// code for Keypad
let code = "";

function keypad(input) {
    if (input == "clear") {
        code = "";
    } else if (input == "ok") {
        if (code.length == 4) {

            console.log("Entered code:", code);
            code = "";
        } 
        
        else {
            console.log("Invalid code. Please enter 4 symbols.");
        }
        
    } else if (code.length < 4) {
        code += input;
    } else {
        console.log("Code length reached");
    }
    console.log(code)
    let keypadout=document.getElementById(`keypadout`)
    
    keypadout.innerHTML=code

}

// Pay
function reset(){
    location.reload()
}
