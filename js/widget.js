(function ($) {
   $(window).load(function(){
      var fields = document.getElementsByClassName('field-widget-hologram-image');
      Array.prototype.forEach.call(fields, function(field){
         var jsonField = $(field).find('input').get(0);
         var area = $(field).find('.hologram-area').get(0);
         var handle = window.hologram(area, {
            uploadUrl: Drupal.settings.Hologram.uploadUrl,
            onComplete: function(result){
               var json = JSON.stringify(result);
               $(jsonField).val(json);
            },
            config: {
               maxFiles: Drupal.settings.Hologram.maxFiles,
               uploader: '/hologram/upload'
            },
         });
         handle.store
         handle.addFiles

         //Push exist images to holgoram widget

         try{
            var files = $(jsonField).val();
            if(files){
               files = JSON.parse(files);
               handle.store.dispatch(handle.addFiles(files));
            }
         }catch(ex){
            console.log(ex);
         }

         handle.store.subscribe(function(){
            var files = handle.store.getState().files;
            var json = JSON.stringify(files);
            $(jsonField).val(json);
         });

      });
   });
})(jQuery);
