var countDownDate = new Date("Jan 9, 2023 0:0:0").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = "Only " + days + "d " + hours + "h " + "left!" ;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("day").innerHTML = "Sorry the event has passed";
    }
  }, 1000);