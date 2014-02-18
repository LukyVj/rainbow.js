$(document).ready(function(){
  $('.tab').fadeOut(0);  
  $('ul.tabLinks li a').click(function(e) {
 e.preventDefault();
   var $this = $(this),
       href = $this.attr('href'); 
   $this.parent().addClass('active'); 
    $('a').not($this).parent().removeClass('active');
    $('.tab'+href).fadeIn(0); 
    $('.tab').not(href).fadeOut(0);
 });

  //Alerts
  var alertWindow = $('.alert');
    alertWindow.prepend('<a href="#" class="close">×</a>');
  var close = $('a.close');    
  close.on('click',function(){
  $(this).parent().fadeOut();
  }); 
});