(function() {
  var aTag, form, toURL;
  form = document.getElementById("bk_form");
  if (form) {
    aTag = form.getElementsByClassName("bb")[0];
    if (aTag) {
      toURL = aTag.href;
      if (toURL && /^http:\/\/www3.keizaireport.com\/jump.php\?*/.test(toURL)) {
        location.href = toURL;
      }
    }
  }
})();