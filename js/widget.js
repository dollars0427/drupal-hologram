(function ($) {
  $(window).load(function(){
      window.hologram(document.getElementsByClassName('hologram-area')[0], {
          uploadUrl: Drupal.settings.Hologram.uploadUrl,
          onComplete: function(result){
              result = JSON.stringify(result['files']);
              $('input[name="field_image[und][0][value][field]"').val(result);
         },
          config: {
              uploader: '/hologram/upload'
          },
      });

      var store = window.hologram.store;

      store.subscribe(function(){
          var files = store.getState().files;
          var val = JSON.stringify(files);
          $('input[name="field_image[und][0][value][field]"').val(val);
      });
  });
})(jQuery);
