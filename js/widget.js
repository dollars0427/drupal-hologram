(function ($) {
  $(window).load(function(){
    window.hologram(document.getElementsByClassName('hologram-area')[0], {
      uploadUrl: Drupal.settings.Hologram.uploadUrl,
      onComplete: function(result){
        var response = result['response'];
        var json = JSON.stringify(result['files']);
        $('#hologram-image-data').val(json);
      },
      config: {
        uploader: '/hologram/upload'
      },
    });

    var store = window.hologram.store;

    //Push exist images to holgoram widget

    try{
      var files = $('#hologram-image-data').val();
      if(files){
        files = JSON.parse(files);
        store.dispatch(window.hologram.addFiles(files));
      }
    }catch(ex){
      console.log(ex);
    }

    store.subscribe(function(){
      var files = store.getState().files;
      var json = JSON.stringify(files);
      $('#hologram-image-data"').val(json);
    });
  });
})(jQuery);
