var btn = document.querySelector("#btn");
var out = document.querySelector("#out");

var str = document.getElementById("req").value;
var x = str.split(" ");
var res = "?text=";
for (var i = 0; i < x.length; i++) {
  if (i === 0) {
    res += x[i];
  } else {
    res += "%20" + x[i];
  }
}
var st =
  "https://cors-anywhere.herokuapp.com/https://yoda-api.appspot.com/api/v1/yodish";
var urli = st.concat(res);

btn.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      var url = JSON.parse(xhr.responseText).yodish;
      out.innerText = url;
    }
  };
  xhr.open("GET", urli);
  xhr.send();
});
