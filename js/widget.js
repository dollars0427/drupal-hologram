(function ($) {
  $(window).load(function(){
      window.hologram(document.getElementsByClassName('hologram-area')[0], {
          uploadUrl: '/hologram/hologram-server/',
          config: {
              uploader: '/hologram/hologram-server/upload.php',
              dropzoneConfig:{
                  style : {
                      background: 'rgba(0,0,0,0.5)',
                      height:'50px',
                      textAlign: 'center',
                      color: '#fff'
                  }
              }
          },
      });
  });
})(jQuery);
