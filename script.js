 $(document).ready(function () {
  
    //init scrolling parallax
    $(window).scroll(function(e){
        var scrolled = $(window).scrollTop();
        if(scrolled < 750){
            parallax()
        }
    });
  
    //define parallax function
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('#parallax').css('background-positionY',(scrolled * -0.2)+'px');
    };
    
  }); 



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


 
