myFunction(Portofolio);

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].ProjectName + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}

$.getJSON( "db.json", function( json ) {
    console.log( "JSON Data received, name is " + json.ProjectName);
});