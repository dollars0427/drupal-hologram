(function ($) {
   $(window).load(function(){
      var fields = document.getElementsByClassName('field-widget-hologram-image');

      Array.prototype.forEach.call(fields, function(field){
         var jsonField = $(field).find('input').get(0);
         var hologram = $(field).find('.hologram-area').get(0);
         var form = $(field).closest('form');

         //If user submit form before upload image
         form.on('submit', function(e){
           var filesInput = $(hologram).find('.hologram-dropzone').find('input').get(0);
           if(filesInput && filesInput.files.length !== 0 && $(jsonField).val().length === 0){
             e.preventDefault();
             var fieldName = $(field).find('label').get(0).textContent;
             if($('.error').length !== 0){
               $('.error').css('display', 'none');
             }
             form.append('<div class="messages error">' + 'Images of field ' + fieldName +
             'had not been uploaded. Please press Upload button to upload your images.</div>')
           }
         });
         if(Drupal.settings.Hologram.maxFileSize){
            var maxFileSize = Drupal.settings.Hologram.maxFileSize;
         }else{
            var maxFileSize = Infinity;
         }

         if(!Drupal.settings.Hologram.enableTitle){
           Drupal.settings.Hologram.enableTitle = false;
         }else{
           Drupal.settings.Hologram.enableTitle = true;
         }

         if(!Drupal.settings.Hologram.enableAlt){
           Drupal.settings.Hologram.enableAlt = false;
         }else{
           Drupal.settings.Hologram.enableAlt = true;
         }

         var settings =  {
            uploadPath: Drupal.settings.Hologram.uploadPath,
            enableTitle: Drupal.settings.Hologram.enableTitle,
            enableAlt: Drupal.settings.Hologram.enableAlt,
            getPreviewUrl: function(props, file) {
               if (typeof file.preview_url != 'undefined') return file.preview_url;
               return props.uploadPath + file['name'];
            },
            onComplete: function(result){
              try{
                var json = JSON.stringify(result);
                $(jsonField).val(json);
              }catch(ex){
                console.log(ex);
              }
            },
            config: {
               dropzoneConfig: {
                  maxSize: maxFileSize,
                  accept: Drupal.settings.Hologram.acceptType,
                  className: 'hologram-dropzone',
                  style: {
                     width: '100%',
                     padding: '2.5em 0',
                     background: 'rgba(0,0,0,0.5)',
                     textAlign: 'center',
                     color: '#fff',
                  },
               },
               maxFiles: Drupal.settings.Hologram.maxFiles,
               uploader: Drupal.settings.Hologram.uploaderUrl
            },
         }

         var cropperConfig = {crop:{}};

         if(Drupal.settings.Hologram.minWidth){
           cropperConfig.minWidth = Drupal.settings.Hologram.minWidth;
         }

         if(Drupal.settings.Hologram.maxWidth){
           cropperConfig.maxWidth = Drupal.settings.Hologram.maxWidth;
         }

         if(Drupal.settings.Hologram.minHeight){
           cropperConfig.minHeight = Drupal.settings.Hologram.minHeight;
         }

         if(Drupal.settings.Hologram.maxHeight){
           cropperConfig.maxHeight = Drupal.settings.Hologram.maxHeight;
         }

         if(Drupal.settings.Hologram.aspect){
           cropperConfig.crop.aspect = Drupal.settings.Hologram.aspect;
         }


         if(cropperConfig){
           settings.config.cropperConfig = cropperConfig;
         }

         var handle = window.hologram(hologram, settings);
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
            if(files.length !== 0){
              var json = JSON.stringify(files);
              $(jsonField).val(json);
            }
            $(jsonField).val('');
         });
      });
   });
})(jQuery);
