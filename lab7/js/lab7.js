// Lab 7 - Functions 
// Natalya Gonzalez <naangonz@ucsc.edu>
// 11/2/23

//Function declarations 
//sortUserName - a function that takes user input and sorts the letters
//of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArray =", nameArraySort);
    //join array back to a string 
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //userName.toLower().split("").sort().join("")
    return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");