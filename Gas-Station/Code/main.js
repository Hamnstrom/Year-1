
/*
let nineFive=1.829;
let nineEight=1.984;
let diesel=1.995;
let e10=1.964;
let cng=2.490;
*/

let prices=[
    {price:1.829,fuel:"nineFive"},
    {price:1.984,fuel:"nineEight"},
    {price:1.995,fuel:"diesel"},
    {price:1.964,fuel:"e10"},
    {price:2.490,fuel:"cng"}
]

let indexx=0;
for(let i=0;i<prices.length;i++){
    indexx++;

    document.getElementById(indexx).innerHTML+=prices[indexx-1].price;

}


// placeholder
sum=55115;
console.log(`sum=${sum}`);

// Reset Sum
function setSum(value){
    sum=value;
    console.log(`sum=${sum}`);
}
