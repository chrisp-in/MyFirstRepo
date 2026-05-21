if (document.getElementById("day")) {
  let now = new Date();

  let day = now.getDay();
  let weekday;

  switch (day) {
    case 0: weekday = "Sunday"; break;
    case 1: weekday = "Monday"; break;
    case 2: weekday = "Tuesday"; break;
    case 3: weekday = "Wednesday"; break;
    case 4: weekday = "Thursday"; break;
    case 5: weekday = "Friday"; break;
    case 6: weekday = "Saturday"; break;
  }

  let months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  let dateText = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();

  let minutes = now.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  let timeText = now.getHours() + ":" + minutes;

  document.getElementById("day").innerHTML = "Today is " + weekday;
  document.getElementById("date").innerHTML = dateText;
  document.getElementById("time").innerHTML = timeText;
}