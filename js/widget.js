(function ($) {
   $(window).load(function(){
      var fields = document.getElementsByClassName('field-widget-hologram-image');
      Array.prototype.forEach.call(fields, function(field){
         var jsonField = $(field).find('input').get(0);
         var area = $(field).find('.hologram-area').get(0);
         if(Drupal.settings.Hologram.maxFileSize){
            var maxFileSize = Drupal.settings.Hologram.maxFileSize;
         }else{
            var maxFileSize = Infinity;
         }

         var config =  {
            uploadUrl: Drupal.settings.Hologram.uploadUrl,
            enableTitle: Drupal.settings.Hologram.enableTitle,
            enableAlt: Drupal.settings.Hologram.enableAlt,
            onComplete: function(result){
               var json = JSON.stringify(result);
               $(jsonField).val(json);
            },
            config: {
               dropzoneConfig: {
                  maxSize: maxFileSize,
                  accept: Drupal.settings.Hologram.acceptType,
                  style: {
                     width: '100%',
                     padding: '2.5em 0',
                     background: 'rgba(0,0,0,0.5)',
                     textAlign: 'center',
                     color: '#fff',
                  },
               },
               maxFiles: Drupal.settings.Hologram.maxFiles,
               uploader: '/hologram/upload'
            },
         }

         var handle = window.hologram(area, config);
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
