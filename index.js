const shell = require("electron").shell

onload = function() {
  let webview = document.getElementById("webview");

  webview.addEventListener('new-window', function(e) {
    shell.openExternal(e.url);
  });
}
