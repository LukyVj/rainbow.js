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
});