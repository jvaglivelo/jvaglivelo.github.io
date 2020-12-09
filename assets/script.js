function getDate() {
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var month = months[(today.getMonth())];
  var yyyy = today.getFullYear();
  var date = days[today.getDay()];
  let h = `${today.getHours()}`.padStart(2, '0')
  let m = `${today.getMinutes()}`.padStart(2, '0')
  let s = `${today.getSeconds()}`.padStart(2, '0')

  var final = date + " " + month + " " + dd + " " + (h + ":" + m + ":" + s) + " on ttys000";
  document.getElementById("date").innerHTML = final;
}
