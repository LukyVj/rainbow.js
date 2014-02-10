$(document).ready(function () {


//Rainbow Header
    function rainbowHeader() {

        var height = $('.rainbow').height(),
            $this = $('body').find('.rainbow').each(function () {

                var body = $('body'),
                    height = $(this).height(),
                    type = $(this).data('type'),
                    deg = $(this).data('degrees'),
                    gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
                    colors = gradient.split('-'),
                    head = $('[class*="section_"].rainbow[data-type="' + type + '"]:before');

              if($(this).data('type') == 'linear'){
                var deg =  deg + 'deg,'
              } 
              else{
              var deg = ''
              }
               
                body.prepend('<style>.rainbow#' + $(this).attr('id') + ':before { position: absolute; content: ""; display: block; width: 100%; height: ' + height + 'px; opacity: .75; z-index: 1; } .rainbow[data-type="' + type + '"]#' + $(this).attr('id') + ':before{background:' + type + '-gradient('+deg+'#' + colors[0] + ',#' + colors[1] + ')}</style>'); 
            }); 


    }

    rainbowHeader();

});
