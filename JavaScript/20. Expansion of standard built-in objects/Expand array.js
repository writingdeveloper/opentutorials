var arr = new Array('seoul', 'new york', 'ladarkh', 'busan', 'Tsukuba');

function getRamdomValueFromArray(haystack) {
  var index = Math.floor(haystack.length * Math.random());
  return haystack[index];
}

console.log(getRamdomValueFromArray(arr));
