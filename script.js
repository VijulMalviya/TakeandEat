 var cross = document.querySelector('#close');
 var bar = document.querySelector('#bar');
 var nav = document.querySelector('.nav');


 bar.addEventListener('click', function(){
    //  console.log('vijul');
   nav.style.marginTop = '0%';
 });
 cross.addEventListener('click', function(){
    //  console.log('vijul malviya');
    nav.style.marginTop = '-200%';
  });