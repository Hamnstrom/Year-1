
// Store interval information
let intervals = {};
// Toggle a function with a interval
function toggleInterval(functionName, interval) {
    if (!intervals[functionName]) {
        intervals[functionName] = setInterval(functionName, interval);
    } else {
        clearInterval(intervals[functionName]);
        delete intervals[functionName];
    };
};




// function to add 2 numbers together
function add(){
    let prompt1=prompt("number1");
    let prompt2=prompt("number2");

    // check for letters in the alphabet (a-z, A-Z, åäö, ÅÄÖ) with regexp
    if(prompt1.match(/[a-zA-ZåäöÅÄÖ]+$/) || prompt2.match(/[a-zA-ZåäöÅÄÖ]+$/)){
        alert("use only: 0-9");
    }
    // output in else
    else{
        let sum1=parseInt(prompt1)+parseInt(prompt2);
        // mean
        let mean1=(parseInt(prompt1)+parseInt(prompt2))/2;
        // sorted array
        let sortArr1=[parseInt(prompt1), parseInt(prompt2)];
        sortArr1.sort(function(a,b){return a-b;});
        // output
        document.getElementById("out1").textContent=`Sum of ${sortArr1[0]} and ${sortArr1[1]} is: ${sum1}. `;
        document.getElementById("out1").textContent+=`The mean of the 2 is: ${mean1}`;

    };
};
// listen for click from id: "add"
document.getElementById("add").addEventListener("click",add);



// change image

let arr1=[
    "../Assets/XFruitBanana.png",
    "../Assets/XFruitCherry.png",
    "../Assets/XFruitGrape.png",
    "../Assets/XFruitLemon.png",
    "../Assets/XFruitPineapple.png",
    "../Assets/XFruitStrawberry.png"
];

//button function
let arr1Index=0;
function changeImg(){
    document.getElementById("imageHere").src=arr1[arr1Index];

    if(arr1Index>=arr1.length-1){
        arr1Index=0;
    }
    else{
        arr1Index++;
  };
};
// listen for click from id: "imageBtn"
document.getElementById("imageBtn").addEventListener("click",changeImg);


// automatic image changer. 5s interval
toggleInterval(changeImg, 5000)

// button to start/stop changeImg() interval
document.getElementById("imageBtnToggle").addEventListener("click",function(){toggleInterval(changeImg,5000)});






