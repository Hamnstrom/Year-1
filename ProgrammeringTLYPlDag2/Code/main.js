console.log("JS")


// set game rules

function gamemode(option1){
    num=0; rowLen=0; bonus=0
    console.log(option1)

    switch(option1){
        case "lotto":num=40, rowLen=7, bonus=40; break;
        case "euro":num=50, rowLen=5, bonus=12; break;
        case "viking":num=48, rowLen=6, bonus=5; break;
        case "keno":num=70, rowLen=10, bonus=0; break;
    }
    console.log(`allowed num:1-${num} row length:${rowLen} bonus numbers:${bonus}`)
}

function genRow(){
    rowGenCount=parseFloat(document.getElementById("rowcount").textContent)
    console.log(`rowGenCount=${rowGenCount}`)

}

// Generate the numbers in array format(arr3[{arr1},{arr1}...])

function generate(){
    arr1=[]; arr2=[]; arr3=[]; arr4=[]
    console.log(`rowLen=${rowLen}`)

    normals=document.getElementById("normal")
    extras=document.getElementById("extra")



    for(let i=0;i<rowGenCount;i++){

        for(let z=0;z<rowLen;z++){

            let foo=Math.floor(Math.random()*num)+1

            arr1.push(foo)

        }

        arr2.push(arr1)
        arr1=[] 
    }
    console.log(arr2)

    for(let i=0;i<rowGenCount;i++){

        for(let z=0;z<rowLen;z++){

            let foo=Math.floor(Math.random()*bonus)+1

            arr3.push(foo)

        }
        
        arr4.push(arr3)
        arr3=[] 
    }
    console.log(arr4)

    // Clear previous content
    normals.innerHTML = "";

    // Display arr2 in "normal"
    for (let i = 0; i < arr2.length; i++) {
        let row = arr2[i];
        let rowHtml = "<div>";

        for (let j = 0; j < row.length; j++) {
            rowHtml += `<span>${row[j]} </span>`;
        }

        rowHtml += "</div>";
        normals.innerHTML += rowHtml;
    }

    
    // Clear previous content
    extras.innerHTML = "";

    // Display arr4 in "extras"
    for (let i = 0; i < arr4.length; i++) {
        let row = arr4[i];
        let rowHtml = "<div>";

        for (let j = 0; j < row.length; j++) {
            rowHtml += `<span>${row[j]} </span>`;
        }

        rowHtml += "</div>";
        extras.innerHTML += rowHtml;
    }
    
}

console.log("End of Document")