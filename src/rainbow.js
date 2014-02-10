$(document).ready(function () {


//Rainbow Header
    function rainbowHeader() {

        var height = $('.rainbow').height(),
            $this = $('body').find('.rainbow:not(#rainText)').each(function () {

                var body = $('body'),
                    height = $(this).height(),
                    width = $(this).width(),
                    opacity = $(this).data('opacity'),
                    type = $(this).data('type'),
                    deg = $(this).data('degrees'),
                    gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
                    colors = gradient.split('-'),
                    head = $('.rainbow[data-type="' + type + '"]:before'); 

              if($(this).data('type') == 'linear'){
                var deg =  deg + 'deg,'
              } 
              else{
              var deg = ''
              }  
               
                body.prepend('<style>.rainbow#' + $(this).attr('id') + ':before { position: relative; content: ""; display: block;margin:0; width: 100%; height:100%;max-width:'+ width +'px;max-height:'+height+'px;min-width:'+ width +'px;min-height:'+height+'px; ' + height + 'px; opacity:'+ opacity +'; z-index: 1; } .rainbow[data-type="' + type + '"]#' + $(this).attr('id') + ':before{background:' + type + '-gradient('+deg+'#' + colors[0] + ',#' + colors[1] + ')}</style>'); 
            }); 


    }

    rainbowHeader();

});
