 
// 1
let numbers=[3,4,6,7];
// 1
let map1=numbers.map((x)=>x*2);
console.log(map1);


// 2
numbers.push(10);
// make array to unordered list
function makeList(arrToList) {

        let listContainer = document.createElement('div');
        let listElement = document.createElement('ul');
        let listItem = document.createElement('li');

        // Add to page
        document.body.appendChild(listContainer);
        listContainer.appendChild(listElement);

        let numberOfListItems = arrToList.length;

        for (let i = 0; i < numberOfListItems; ++i) {
                // Add the item text
	// Use if array elements contain HTML
                // listItem.innerHTML = listData[i];
                // If not, use the line below
	// Use if array elements are text only
                listItem.textContent = arrToList[i];
                // Add listItem to listElement
                listElement.appendChild(listItem);
                // Reset list item
                listItem = document.createElement('li');
        }
}


makeList(numbers)

// 3
let arr31 =[1,2,3,];
let arr32=[4,6,7,];
let arr33=arr31.concat(arr32);
document.getElementById("div1").innerHTML=arr33;

makeList(arr33);

// 4
let datanoms = [
    { name: 'foo', occupation: 'teacher', age: 42 }, 
    { name: 'Alex', occupation: 'teacher', age: 44 },
    { name: 'Tom', occupation: 'teacher', age: 44 },
    { name: 'Andreas', occupation: 'student', age: 33 },
    { name: 'Kevin', occupation: 'student', age: 17 },
    { name: 'Linus', occupation: 'student', age: 17},
    { name: 'Mikael', occupation: 'student', age: 17 },
    { name: 'Eddie', occupation: 'student', age: 19 },
    { name: 'Kristoffer', occupation: 'student', age: 17 },
    { name: 'Rasmus', occupation: 'student', age: 18 },
    { name: 'Max', occupation: 'student', age: 17 },
    { name: 'Isak', occupation: 'student', age: 17 }
];


// Function to create HTML table
function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create data rows
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

// Display the table in the 'table-container' div
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(createTable(datanoms));

// 5 (sum of all "age" combined)
var totAge = datanoms.reduce((a,b)=>a+b.age,0);
console.log(totAge);





const code = [
	{name: 'john', langs: ['HTML','CSS']}, 
	{name: 'jack', langs: ['HTML','JavaScript','Python','TypeScript']}, 
	{name: 'diane', langs: ['JavaScript','PHP']}
];

// reduce 1
let progLang=code.reduce((acc,curr)=>{
    acc.push(...curr.langs);
    return acc;
},[]);
console.log(`array with duplicates: ${progLang}`);

// reduce 2
progLang=Array.from(new Set(progLang));
console.log(`array without duplicates: ${progLang}`);
