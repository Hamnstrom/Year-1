let div=""
let text=""

function createDiv(){
    div = document.createElement('div');
    div.classList.add('test');
    text = document.createTextNode('Test');
    div.appendChild(text);
    document.body.appendChild(div)
}



