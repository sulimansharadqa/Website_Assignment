function calculation() {
  var stName= document.getElementById('stName').value;
  var width = parseFloat(document.getElementById("width").value);
  var height = parseFloat(document.getElementById("height").value);
  var result;
  if(stName==='' || isNaN(width) || isNaN(height)){
    alert("All fields are required");
  }else{
    if (document.getElementById("area").checked) {
      result = width * height;
    } else if (document.getElementById("boundary").checked) {
      result = (width + height) * 2;
    }
    document.getElementById("result").innerHTML = result || "&nbsp;";
  }
  
}

function clearFields() {
  document.getElementById("stName").value = "";
  document.getElementById("width").value = "";
  document.getElementById("height").value = "";
  document.getElementById("boundary").checked = false;
  document.getElementById("area").checked = true;
  document.getElementById("result").innerHTML = "&nbsp;";
}
