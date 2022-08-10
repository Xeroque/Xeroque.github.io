var time = 15;
setInterval(function() {
  var seconds = time % 15;
  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }
  document.getElementById("time").innerHTML = seconds;
  time--;
  if (time == 0) {
    window.location.href = "https://eduardomdsousa.com/index.html";
  }
}, 1000);
