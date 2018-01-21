$(function(){
  let parent=$('#par');
  let clickable=$('#clickable');
  clickable.on('click',function(){
    clickable.parent().parent().css({'color':'red',
                                    'background-color':'green'});
  })

  // let children = parent.children('#child1');
  // console.log(children);
  // let child1 = parent.children('#child1').siblings();
  // child1.css('color','red')
});
