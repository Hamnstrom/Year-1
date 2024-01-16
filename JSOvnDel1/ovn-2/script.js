
// 1
var x=10;
if (x <10) {
    console.log(x+"är mindre eller lika stort som 10")
}


// 2
else if (x>10) {
    console.log(x+" "+"är större än 10")
}
else {
    console.log(x+" "+"är 10")
}


// 3
var season="vinter";
if (season=="vinter") {
    console.log("årstiden är: "+season)
}
else {
    console.log("årstiden är inte: "+season)
}


// 4
var kodare = "Tommen";
var lang = "";

if(lang == "PHP") {
    var upg4 = kodare + " " + "kodar" + " " + "php";
}

else if(lang == "JAVA") {
    var upg4 = kodare + " " + "är kock";
}

else if(lang == "RUBY") {
    var upg4 = kodare + " " + "ruby";
}

else {
    var upg4 = kodare + " " + "kodar något annat";
}
console.log(upg4);


// 5
var z=8;
if (z>2 && z<10) {
    
}


// 6 
var varType="wasd"
var type=typeof(varType)

console.log("datat är av typen: " + type)


// 7
var text="12345678901234567890"
var textLength=text.length
console.log(textLength)

    if (textLength == 0) {
        console.log(text+"har 0 tecken")
    }
    else if (text.length >= 1 && textLength <= 3) {
        console.log(text+"har 1-3 tecken")
    }
    else if (textLength >= 4 && textLength <= 10) {
        console.log(text+"har 4-10 tecken")
    }
    else if (textLength >= 11 && textLength <= 19) {
        console.log(text+"har över 10 men under tjugo tecken")
    }
    else if (textLength > 20) {
        console.log(text+"har över 20 tecken")
    }
    else {
        console.log("Invalid input or text.length == 20 \n" + "text == " + text)
    }


// 8
var randomNum=Math.floor((Math.random() * 20) + 1)
console.log(randomNum)

function guess() {
    var userInput=prompt("Gissa nummer mellan 1-20")

    if (userInput == randomNum) {
    alert("epic W")
    }

    else {
        prompt("fel")
    }

}




