/*
    gör en div tag som skriver ut en datum samt månad + år och 
    ge den en orange färg font storlek från css 46, med hjälp av javascript ? Lämna in en skild 
    main.js samt index.html + style.css fil?
*/


const f = new Date();
document.getElementById("month").innerHTML = "month: " + f.getMonth() +1; 
document.getElementById("day").innerHTML = "day: " + f.getDate();
document.getElementById("year").innerHTML = "year: " + f.getFullYear();


