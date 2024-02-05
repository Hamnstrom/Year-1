
let prices=[
    {price:1.123,fuel:"95"},
    {price:2.345,fuel:"98"},
    {price:3.456,fuel:"Diesel"},
    {price:4.567,fuel:"E10"},
    {price:5.678,fuel:"CNG"}
]

for(let i=0;i<5;i++){
    document.getElementById(i+1).innerHTML=prices[i].fuel+"="+prices[i].price+"/liter";
}



function foobar(option){
    let volume;

    switch(option){
        case 1:volume=10/fuelPrice;
        case 2:volume=25/fuelPrice;
        case 3:volume=50/fuelPrice;
        case 4:volume=100/fuelprice;
    }
}


