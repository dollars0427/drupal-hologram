(function ($) {
  $(window).load(function(){
      window.hologram(document.getElementsByClassName('hologram-area')[0], {
          uploadUrl: '/hologram/hologram-server/',
          config: {
              uploader: '/hologram/hologram-server/upload.php',
              dropzoneConfig:{}
          },
      });
  });
})(jQuery);
