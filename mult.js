$(function(){
  $('.parent').on('click',function(event){

    console.log("parent is clicked")
  });
  $('.clickable').on('click',function(event){
    event.stopPropagation();
    console.log("claikcable is clicked")
  });
})
