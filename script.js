function getDate() {
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var month = months[(today.getMonth())];
  var yyyy = today.getFullYear();
  var date = days[today.getDay()];
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
  var final = date + " " + month + " " + dd + " " + time + " on ttys000";
  document.getElementById("date").innerHTML = final;
}