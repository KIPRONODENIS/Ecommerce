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
  
  	document.querySelector('#microcart').classList.toggle('hidden');
  }

  //function to toggle desktop Menu

  function openMenu() {

   document.querySelector('#desktop-menu').classList.toggle('hidden');
   document.querySelector('#overlay').classList.toggle('hidden');
   document.querySelector('#menu-bar').classList.toggle('hidden');
   document.querySelector('#menu-close').classList.toggle('hidden');
   document.querySelector('.submenu').style.display="none";
  }

//select the menu item and bind an event to display it submenu
 document.querySelector('#skin-care-1559').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

  document.querySelector('.submenu').innerHTML=submenu;
  document.querySelector('.submenu').style.display="block";
  });



//select the menu item and bind an event to display it submenu
 document.querySelector('#hair-care-1560').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });


//select the menu item and bind an event to display it submenu
 document.querySelector('#body-care-1561').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });

//select the menu item and bind an event to display it submenu
 document.querySelector('#cosmetics-1558').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });

 //select the menu item and bind an event to display it submenu
 document.querySelector('#health-care-1562').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });



 //select the menu item and bind an event to display it submenu
 document.querySelector('#beauty-tools-1563').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });

  //select the menu item and bind an event to display it submenu
 document.querySelector('#home-and-life-1548').addEventListener('click',function(){
 //the id of the menu item is the class of its submenu
 let id="."+this.getAttribute('id');
//its submenu
let submenu= document.querySelector(id).innerHTML;

 
  document.querySelector('.submenu').style.display="block";
   document.querySelector('.submenu').innerHTML=submenu;
  });


//function to toggle modal login

 function toggleAccountModal() {
 	  document.querySelector('.account-modal').classList.toggle('hidden')
 }

 //function to open login form

 function openLogin() {
 	 document.querySelector('.register').classList.toggle('hidden')
 	 document.querySelector('.login').classList.toggle('hidden')
 }

 //function to open register

  function openRegister() {
 	
 	 document.querySelector('.login').classList.toggle('hidden')
 	  document.querySelector('.register').classList.toggle('hidden')
 }


 //function to open category
 function toggleCategory(id) {
 let el="#"+id+" "+"ul";
document.querySelector(el).classList.toggle('xl:block');
 }