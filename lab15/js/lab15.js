/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Natalya Gonzalez
   Date: 12/1/23
*/
//
const ENDPOINT = "https://jservice.io/api/random";
// attach an event listener
$("#activate").click(function(){
   //ajax that shit
 $.ajax({
   "url": ENDPOINT,
   "dataType": "json",
   "success": function(results){
     console.log(results);
      //in the callback:
      //extract the results
     randomFact = results[0].answer;
     randomAnswer = results[0].question;
      //add to output div
     $("#output").append("<p>" + randomFact + ": " + randomAnswer + "</p>");
   },
   "error": function(){
     }
   });
 });

