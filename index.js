var btn = document.querySelector("#btn");
var out = document.querySelector("#out");
var btn = document.querySelector("#btn");
var inputArea = document.getElementById("inputArea");


btn.addEventListener("click", function () {
  var str = inputArea.value;
  var x = str.split(" ");
  var res = "?text=";
  console.log(str);
  console.log(x); 
  for (var i = 0; i < x.length; i++) {
    if (i === 0) {
      res += x[i];
    } else {
      res += "%20" + x[i];
    }
  }
  console.log(res);

  var st ="https://cors-anywhere.herokuapp.com/https://yoda-api.appspot.com/api/v1/yodish";
  var urli = st.concat(res);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      var output = JSON.parse(xhr.responseText).yodish;
      out.innerText = output;
      inputArea.innerText = "";
    }
  };
  xhr.open("GET", urli);
  xhr.send();
});
