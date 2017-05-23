(function ($) {
  $(window).load(function(){
      window.hologram(document.getElementsByClassName('hologram-area')[0], {
          onComplete: function(result){
             //console.log(result);
         },
          config: {
              uploader: '/hologram/upload'
          },
      });
  });
})(jQuery);
