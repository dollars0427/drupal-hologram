(function ($) {
   $(window).load(function(){
      var fields = document.getElementsByClassName('field-widget-hologram-image');
      Array.prototype.forEach.call(fields, function(field){
         var area = $(field).find('.hologram-area').get(0);
         var handle = window.hologram(area, {
            uploadUrl: Drupal.settings.Hologram.uploadUrl,
            onComplete: function(result){
               var jsonField = $(field).find('input').get(0);
               var json = JSON.stringify(result);
               $(jsonField).val(json);
            },
            config: {
               uploader: '/hologram/upload'
            },
         });
         handle.store
         handle.addFiles
      });
   });
})(jQuery);
