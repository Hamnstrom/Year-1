'use strict'


// 1
    let fruits=[
        "apple",
        "orange",
        "banana",
        "pear",
        "mango",
        "kiwi",
        "plum",
        "coconut"
    ]

    for(let i=0; i<fruits.length;i++) {
        console.log(fruits[i])
    }


// 2
    console.log(`array: fruits innehåller ${fruits.length} värden`)


// 3 
    let fruitsString=""
    for(let i=0;i<fruits.length;i++){
        fruitsString+=`${fruits[i]}   `
    }
    console.log(fruitsString)


// 4
    // map:
        let attatchTo=["Ice", "Green"]
        let attatchTo2=["Fin", "Ire"]

        // concat
            attatchTo=attatchTo.concat(attatchTo2)
        // push
            attatchTo.push("Po", "Thai")
        // pop
            attatchTo.pop()
        // shift
            attatchTo.shift()
        // unshift
            attatchTo.unshift("Swizer")
        // splice
            attatchTo.splice(1,1)   // removes one item at position 1
            attatchTo.splice(1,0, "New Ze") // adds "New Ze" at position 1


        console.log(attatchTo.map(attatchTo=>attatchTo+"land"))

// 5
let laborera=[54,67,89,23,33]

function calcSum() {
    let calcSumOut=0;
    let calcAverage=0;
    for(let i=0;i<laborera.length;i++){
        calcSumOut+=[i]
    }

    calcAverage=calcSumOut/laborera.length

    console.log(parseInt(calcSumOut))
    console.log(calcAverage)
    document.getElementById('calcHere').innerHTML=`<p>Summa: ${calcSumOut}</p>`
    document.getElementById('calcHere').innerHTML+=`<p>Medelvärde: ${calcAverage}</p>`
    document.getElementById('calcHere').innerHTML+=`<p>Lista: ${laborera.sort(function(a, b){return a - b;})}`
}





/*
for(let i=1;i<=10;i++) {
    console.log([i])
}
*/

