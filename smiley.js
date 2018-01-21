$(function(){

  let face=$('#face');
  let eye1=$('#eye1');
  let eye2=$('#eye2');
  face.css({
    'width':'500px',
    'height':'500px',
    'border-radius':'50%',
    'background-color':'yellow',
    'position':'relative'
  })
  face.children().css({
    'width':'70px',
    'height':'70px',
    'border-radius':'50%',
    'background-color':'yellow',
    'position':'absolute',
    'border':'4px solid black'
  })
  face.children('#eye1').css({
  'margin-left':'82px',
  'margin-top':'99px'
  })
  face.children('#eye2').css({
  'margin-left':'345px',
  'margin-top':'99px'
  })

  face.children().click(function(){
    $(this).css({

    'background-color':'black'
  });


  });


});
