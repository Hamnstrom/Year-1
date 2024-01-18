
// 1
var n = 0
while (n < 20) {
n++
console.log("hej på dig rad " + n)
}


// 2
for (l = 10; l <= 20; l++) {
    console.log(l)
}


// 3
var p = -1
while (p <= 20) {
    p++
    if (p % 2 === 0) {
        console.log(p)
    }
    else {
        null
    }
}

// 4
var o = 0
var full = ""
while (o <= 10) {
    full += o
    o++
}
console.log(full)

// 5
console.log("uppg 5:")

var rad = 10

if (rad == 0) {
    console.log("värdet är noll")
}
else if ( rad == 1) {
    console.log("Endast en rad")
}
else if( rad >= 2 && rad <= 10) {
    console.log("detta är rad: "+rad)
}
else {
    console.log("För mycket rader eller ogiltigt värde")
}

// Arrays
// 1

var vokaler = ["a","o","u","å","e","i","y","ä","ö"," "]
var textStrang = "en text fras som innehåller en massa vokaler" 
var textStrangLength = textStrang.length
var vokalOutput = ""

for (var i=0;i<textStrangLength;i++) {
    var check = textStrang.charAt(i)
    if (vokaler.includes(check)) {
        vokalOutput = vokalOutput + check
    }


}
document.getElementById("div1").innerHTML=vokalOutput

var vokaler = ["a","o","u","å","e","i","y","ä","ö"," "]
var textStrang = "en text fras som innehåller en massa vokaler" 
var textStrangLength = textStrang.length
var vokalOutput = ""

var i = 0
while (i<textStrangLength) {
    
    var check = textStrang.charAt(i)
    if (vokaler.includes(check)) {
        vokalOutput = vokalOutput + check
    }
    i++
}
document.getElementById("div2").innerHTML=vokalOutput

// p2
// 1
