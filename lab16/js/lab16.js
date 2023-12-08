/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Natalya Gonzalez
   Date: 12/6/23
*/
//


const ENDPOINT = "https://xkcd.com/info.0.json";


// add button event listener 
$("#button").click(function(){
  console.log("Click");
  
	// construct ajax object
	const comicObj = {
	  url: ENDPOINT,
	  type: "GET",
	  dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
	}
    
    $.ajax(comicObj);
})

function ajaxSuccess(comicObj){
	  console.log("Here's what I got:", comicObj)
      const title = comicObj.title;
      const desc = comicObj.alt;
      const imageURL = comicObj.img;
      $("#output").append("<h2" + comicObj.title + "</h2>");
      $("#output").append("<img src='" + comicObj.img + "'/>");
      $("#output").append("<p>" + comicObj.alt + "</p>");
 
}

function ajaxError(request,error){
	  console.log("Oops:", request, error)
}