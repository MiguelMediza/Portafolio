//Funcion para activar y desactivar el icono del menú
  jQuery('document').ready(function($){
    
    var menuBtn = $('.menu-icon'); 
     menu = $('.navigation ul');
     
     menuBtn.click(function(){
       
         if(menu.hasClass('show')){
          
             menu.removeClass('show');   
             
         }
         else{
                  menu.addClass('show');   
         }
 
     
   });             
                   
                   
 });


 
