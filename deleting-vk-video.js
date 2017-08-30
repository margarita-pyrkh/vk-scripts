(function() {
    "use strict";
    if (!confirm("Удалить все видео?")) return;
    var deleteVideoLink = document.body.querySelectorAll(
      'div.video_item.video_can_edit #delete[onClick^="return Video.onVideoDelete"]'
    );
    for (var i = 0; i < deleteVideoLink.length; i++) {
      deleteVideoLink[i].click();
    }
    alert(deleteVideoLink.length + " videos deleted");
  })();