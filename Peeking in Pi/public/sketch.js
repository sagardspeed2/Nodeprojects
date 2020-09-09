let searchBox, indexP;
 
function searchItUp() {
  let search = searchBox.value();
  let url = `http://localhost:3000/search/${search}`;
  loadJSON(url, gotResult);
}

function gotResult(data) {
    indexP.html(data.index);
}

function setup () {
  noCanvas();
  
  searchBox = createInput('');
  searchBox.input(searchItUp);
  
  indexP = createP("searching");
}