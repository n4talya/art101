// Lab 14 - Debugging
// Natalya Gonzalez <naangonz@ucsc.edu>
// 11/28/23

function sortingHat(str) {
    len = str.length;
    mod = str.length % 4;
     if (mod== 0) {
      myHouse = "Gryffindor who are brave, chivalrous, and courageous";
     } 
      else if (mod == 1) {
      myHouse = "Ravenclaw who are intelligent, knowledgable, and fair";
     }
      else if (mod == 2) {
      myHouse = "Slytherin who are ambition, cunning, and resourceful";
     }
     else if (mod == 3) {
      myHouse = "Hufflepuff who are very hard working, patient, and loyal";
     }
     return myHouse;
  }
  
  var myHouse = sortingHat("#input")
  
  $("#button").click(function(){
  //console.log("Button Clicked!");
  //var name = prompt("What is your name?");
  var name = $("#input").val();
  var myHouse = sortingHat(name)
  console.log("Sorting Hat: After very careful consideration, I have sorted you into " + myHouse)
  });
  //click listener for button
  $("#button").click(function(){
  //get value of input field
  $("input:text").val("");
  
  $("#output").html("Sorting Hat: After very careful consideration, I have sorted you into " + myHouse)
  
  });
  