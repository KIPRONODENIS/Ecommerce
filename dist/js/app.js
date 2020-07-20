document.querySelector('#header_hamburger_menu').addEventListener('click', function(){
	document.querySelector('#sidebar').classList.toggle('hidden');
});

document.querySelector('#times').addEventListener('click', function(){
	document.querySelector('#sidebar').classList.toggle('hidden');
});

document.querySelectorAll('.skin-care-1559').forEach(function(item){

item.addEventListener('click', function(){
document.querySelector('#skin-care-menu').style.display="block";
});
})




document.querySelector('#close-submenu').addEventListener('click', function(){
document.querySelector('#skin-care-menu').style.display="none";
});


  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
      speed:1000,
      type   : 'loop',
      autoplay:true

    }).mount();
  } );



//function to toggle cart
  function toggleCart(){
  	console.log('click');
  	document.querySelector('#microcart').classList.toggle('hidden');
  }