$(document).ready(function(){

$.ajax({
url:'http://www.freecodecamp.com/news/hot',
type:'GET',
contentType:'application/json',
dataType:'json',
success: function(data) {
  
  data.forEach(function(apiStory){
   
    
    var picture = apiStory.image;
    
    if (!apiStory.image){
      picture = apiStory.author.picture}
  
    if (picture !== "undefined"){
    
      $('.content').append( '<div class = "story">' 
                           + '<a href="' + apiStory.link + '">'  +'<img src= "' + picture + '">'+'</a>'
                           + '<a href="' + apiStory.link + '">' +'<div class = "text">'+apiStory.headline+'</div>'+'</a>'
                           + '<div class = "upvoteIcon">'+apiStory.upVotes.length+'</div>'
                           +'</div>')

    }
    })
                
}
})

});



 $( document ).ajaxComplete(function( event,request, settings ) {

   $("body img").on("load", function () { 
      $('.content').masonry({
      itemSelector: '.story',
      columnWidth: 10,
      gutter: 4
      }); 
   });

});



