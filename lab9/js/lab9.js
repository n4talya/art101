//Lab 9 - Libraries & jQuery 
// Natalya Gonzalez <naangonz@ucsc.edu>
// 11/8/23
/*
lab.js - This simple Javascript/jQuery script uses buttons to modify some elements on the page
Requirements : jQuery must be loaded for this script to work.
Author: Natalya Gonzalez 
Date: 11/12/23
*/

//add button to challenge section 
$("#challenge").append("<button id='button-challenge'>don't click me!</button>");
$("#challenge").click(function(){
    $(".minor-section").css("background-color", "yellow");
 })
//add a click listener to the challenge button 
$("#button-challenge").click(function(){
    console.log("Don't press me, brah.")
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//add button to problems section
$("#problems").append("<button id='button-problems'>i change color</buttons>");
$("#problems").click(function(){
   $(".minor-section").css("background-color", "green");
})
//add a click listener to the problems button 
$("#button-problems").click(function(){
    //now add (or subtract) the "highlight" class to the section
    $("#problems").toggleClass("back");
});

//add button to reflection section
$("#reflection").append("<button id='button-reflection'>Guess what I do</buttons>");
$("#reflection").click(function(){
    $(".minor-section").css("background-color", "pink");
})
//add a click listener to the reflection button 
$("#button-reflection").click(function(){
    //now add (or subtract) the "highlight" class to the section
    $("#reflection").toggleClass(".special");
});

//add button to results section
$("#results").append("<button id='button-results'>what color is next?</buttons>");
$("#results").click(function(){
    $(".minor-section").css("background-color", "purple");
 })
//add a click listener to the results button 
$("#button-results").click(function(){
    //now add (or subtract) the "highlight" class to the section
    $("#results").toggleClass(".special");
});