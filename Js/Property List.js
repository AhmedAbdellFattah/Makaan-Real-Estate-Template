// انا مسحت الي عملت هنا عشان مش مهم علي العموم كان الكود بيخلي كل حاجة تتمسح بس كدا انا هحاول فيها ان شاء الله

function showSell() {
  document.getElementById("style").innerHTML =
    ".rent{display:none;}" +
    "#for-sell{background-color:#00b98e; color:white;}" +
    ".continer .Title .text-rgiht button:nth-child(1){background-color:white; color:black;}" +
    ".continer .Title .text-rgiht button:nth-child(1):hover{background-color:#00b98e; color:white;}" +
    "#for-rent{background-color:white; color:black;}" +
    "#for-rent:hover{background-color:#00b98e; color:white;}";
}

function showRent() {
  document.getElementById("style").innerHTML =
    ".sell{display:none;}" +
    "#for-rent{background-color:#00b98e; color:white;}" +
    ".continer .Title .text-rgiht button:nth-child(1){background-color:white; color:black;}" +
    "#for-sell{background-color:white; color:black;}" +
    "#for-sell:hover{background-color:#00b98e; color:white;}" +
    ".continer .Title .text-rgiht button:nth-child(1):hover{background-color:#00b98e; color:white;";
}

function showFeatured() {
  document.getElementById("style").innerHTML = "";
}