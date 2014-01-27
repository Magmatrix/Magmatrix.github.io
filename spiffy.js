
/* Fullscreen */
function goAllIn() {
  e=document.body;
  var f = e.requestFullscreen || e.msRequestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen;
  if (typeof f != "undefined" && f) {
    f.call(e);

  /* BEGIN M$ INTERNET EXPLORER WORKAROUND */  
  } else if(typeof window.ActiveXObject!="undefined") {
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript!=null) { wscript.SendKeys("{F11}"); }
  }
  /* END M$ INTERNET EXPLORER WORKAROUND */
}
