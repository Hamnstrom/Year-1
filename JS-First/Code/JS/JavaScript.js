let str

function myButton() {
    str = prompt("Day or Night").toLowerCase();

    if (str === "day") {
        document.getElementById('planet').src = "../Assets/IMG/XEarth-day.png"
    } else if (str === "night") {
        document.getElementById('planet').src = '../Assets/IMG/XEarth-night.png'
    } else {
        myButton()
    }

}



