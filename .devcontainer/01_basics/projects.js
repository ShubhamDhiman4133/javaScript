//COLOR SCHEME SWITCHER

const buttons =document.querySelectorAll('.button');
const mybody =document.querySelector('body');

buttons.forEach(function(bt){
    console.log(bt);
    bt.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey'){
        mybody.style.backgroundColor=e.target.id;
      }
      if(e.target.id === 'purple'){
        mybody.style.backgroundColor=e.target.id;
      }
      if(e.target.id === 'white'){
        mybody.style.backgroundColor=e.target.id;
      }
      if(e.target.id === 'blue'){
        mybody.style.backgroundColor=e.target.id;
      }
      if(e.target.id === 'yellow'){
        mybody.style.backgroundColor=e.target.id;
      }
    });
});