var time = 30;
setInterval(function() {
  var seconds = time % 30;
  var minutes = (time - seconds) / 30;
  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  document.getElementById("time").innerHTML = minutes + ":" + seconds;
  time--;
  if (time == 0) {
    window.location.href = "https://eduardomdsousa.com/index.html";
  }
}, 1000);
