(function ($) {
  $(window).load(function(){
      window.hologram(document.getElementsByClassName('hologram-area')[0], {
          uploadUrl: Drupal.settings.Hologram.uploadUrl,
          onComplete: function(result){
              result = JSON.stringify(result);
              $('input[name="field_image[und][0][value][field]"').val(result);
         },
          config: {
              uploader: '/hologram/upload'
          },
      });
  });
})(jQuery);
