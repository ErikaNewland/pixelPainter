$(document).ready(function(){

//calculating initial grid spects
var oneRow = 16
var gridNumber = oneRow * oneRow
var gridWidth = Math.floor(480/oneRow);

//Creating initial grid
for (i=1;i<=gridNumber;i++){
$("#container").append("<div class=grid></div>");
}


//Size the initial grid
$(".grid").css("width",gridWidth);
$(".grid").css("height",gridWidth);

//Getting random numbers for RGB colors

//"Sketch" behavior
$(".grid").on("mouseover",function(){
  //$(this).css("background-color","black");
  var red=Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
  var blue=Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
  var green = Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
  var color="rgb("+red+", "+green+", "+blue+")";
  $(this).css("background-color", color);

  });
});

//Clear button resets the grid
$("button").on("click",function(){
   //determine the grid size based on user input
    oneRow = prompt("How many squares per row?");
    gridNumber = oneRow * oneRow
   //empty the container of the previous grid
   $("#container").empty();
   //Create the new grid
      for (i=1;i<=gridNumber;i++){
      $("#container").append("<div class=grid></div>");
      }
    //Calculate the new gride spects
    gridWidth = (480/oneRow);
    //Size the new grid
    $(".grid").css("width",gridWidth);
    $(".grid").css("height",gridWidth);
    //"Sketch" behavior
    $(".grid").on("mouseover",function(){
    //$(this).css("background-color","black");
    var red=Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
    var blue=Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
    var green = Math.floor(Math.random() * (Math.floor(255) -Math.ceil(0)));
    var color="rgb("+red+", "+green+", "+blue+")";
    $(this).css("background-color", color);
  });


  });
