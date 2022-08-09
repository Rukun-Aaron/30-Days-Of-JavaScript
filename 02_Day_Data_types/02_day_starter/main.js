// this is your main.js script

let word = "hi"
let title = '30 Days Of JavaScript'
console.table({title: title, length: title.length,
     newTitle: title.toUpperCase(), lowerCaseTitle: title.toLowerCase(),
     slicedStr: title.toLowerCase().includes("days") ? title.substring(title.indexOf("Days")):null});

let titleWords = title.split(" ")
console.log(titleWords)

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split())

let newString = title.replace("JavaScript", "Python")
console.log(newString);

console.log(title.charAt(15));

let jIndex = title.indexOf("J")
let jToChar = title.charCodeAt(jIndex)
console.log(jToChar);

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

let rand = Math.floor(Math.random() * 101)

let rand2 = Math.floor(Math.random() * 101) + 50

let rand3 = Math.floor(Math.random() * 256)

let randIndex = Math.floor(Math.random() * title.length)
console.log(title[randIndex] == ' ' ? "Space char":title[randIndex]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t29")