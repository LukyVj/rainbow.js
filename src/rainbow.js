// Rainbow.js 0.0.2
// 2014 @LukyVj
// http://lucasbonomi.com
// Thanks to @dervondenbergen for his help

$(document).ready(function () {

  //Rainbow Header
  function rainbowHeader(){
    var height = $('.rainbow').height(),
        $this = $('body').find('.rainbow').not('[id*="gradient_"],[id*="rainText"],[id*="rainImage"]').each(function () {
 
          var body = $('body'),
              height = $(this).height(),
              width = $(this).width(),
              opacity = $(this).data('opacity'),
              type = $(this).data('type'),
              deg = $(this).data('degrees'),
              gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
              colors = gradient.split('-'),
              head = $('.rainbow[data-type="' + type + '"]:before');
          if ($(this).data('type') == 'linear') {
            var deg = deg + 'deg,'
            } else {
              var deg = '' 
              }       
          body.prepend('<style id="dynamicStyle">.rainbow#' + $(this).attr('id') + ':before { position: absolute; content: ""; display: block;margin:0; width: 100%; height:100%;max-width:' + width + 'px;max-height:' + height + 'px;min-width:' + width + 'px;min-height:' + height + 'px; ' + height + 'px; opacity:' + opacity + '; z-index: 1; } .rainbow[data-type="' + type + '"]#' + $(this).attr('id') + ':before{background:' + type + '-gradient(' + deg + '#' + colors[0] + ',#' + colors[1] + ')}</style>');   
          $(document).resize(function() {
            var dyn = document.querySelector('#dynamicStyle'),
                dynTxt = dyn.innerText,
                newWidth = document.width,
                newdynTxt = dynTxt.replace(width, newWidth);
                console.log('old width :' + width + '\n' + 'New width : ' + newWidth);
            dyn.innerText = newdynTxt;
         });
      });
  } 


  //Rainbow image
  function rainbowImage(){
    var height = $('.rainbow').height(),
        $this = $('body').find('.rainbow').not('[id*="gradient_"],[id*="rainText"],[id*="Header_"]').each(function () {
          var body = $('body'),
              height = $(this).height(),
              width = $(this).width(),
              opacity = $(this).data('opacity'),
              type = $(this).data('type'),
              deg = $(this).data('degrees'),
              gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
              colors = gradient.split('-'),
              head = $('.rainbow[data-type="' + type + '"]:before');
          if ($(this).data('type') == 'linear') {
            var deg = deg + 'deg,'
            } else {
              var deg = '' 
              }       
            body.prepend('<style id="dynamicStyle">.rainbow#' + $(this).attr('id') + ':before { position: absolute; content: ""; display: block;margin:0; width: 100%; height:100%;max-width:' + width + 'px;max-height:' + height + 'px;min-width:' + width + 'px;min-height:' + height + 'px; ' + height + 'px; opacity:' + opacity + '; z-index: 1; } .rainbow[data-type="' + type + '"]#' + $(this).attr('id') + ':before{background:' + type + '-gradient(' + deg + '#' + colors[0] + ',#' + colors[1] + ')}</style>'); 
      });
  } 

   //Rainbow Block
  function rainbowBlock(){ 
    var height = $('.rainbow').height(),
        $this = $('body').find('.rainbow').not('[id*="rainText"],[id*="Header_"],[id*="rainImage"]').each(function () {
          var body = $('body'),
              height = $(this).height(),
              width = $(this).width(),
              opacity = $(this).data('opacity'),
              type = $(this).data('type'),
              deg = $(this).data('degrees'),
              gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
              colors = gradient.split('-'),
              head = $('.rainbow[data-type="' + type + '"]:before');

          if ($(this).data('type') == 'linear') {
            var deg = deg + 'deg,'
            } else {
              var deg = '' 
              }      
            body.prepend('<style id="dynamicStyle">.rainbow#' + $(this).attr('id') + ':before { position: absolute; content: ""; display: block;margin:0; width: 100%; height:100%;max-width:' + width + 'px;max-height:' + height + 'px;min-width:' + width + 'px;min-height:' + height + 'px; ' + height + 'px; opacity:' + opacity + '; z-index: 1; } .rainbow[data-type="' + type + '"]#' + $(this).attr('id') + ':before{background:' + type + '-gradient(' + deg + '#' + colors[0] + ',#' + colors[1] + ')}</style>');
        });
  } 


  //Rainbow Text
  function rainbowText() {
    $this = $('body').find('h1.rainbow,h2.rainbow,h3.rainbow,h4.rainbow,h5.rainbow,h6.rainbow,a.rainbow,p.rainbow').each(function () {
      var body = $('body'),
          height = $(this).height(),
          width = $(this).width(),
          opacity = $(this).data('opacity'),
          type = $(this).data('type'),
          deg = $(this).data('degrees'),
          gradient = $('[data-type*="' + type + '"]#' + $(this).attr('id') + '').data('color'),
          colors = gradient.split('-'),
          head = $('.rainbow[data-type="' + type + '"]:before');
      if ($(this).data('type') == 'linear') {
        var deg = deg + 'deg,'
        } else {
          var deg = ''
          }
      body.prepend('<style>.rainbow#' + $(this).attr('id') + '{height:' + height + 'px;background:' + type + '-gradient(' + deg + '#' + colors[0] + ',#' + colors[1] + '); background-size:120%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;}.rainbow#' + $(this).attr('id') + ':before{display:none}  </style>');
    });
  }


  rainbowText();
  rainbowBlock();
  rainbowHeader();
  rainbowImage();

});

