
var regex = /"(registro)":\s*(\[.*?\])\s*\}\)"/gm;
var result = regex.match(string);
console.log(result);
var test = result[2];

console.log(string);
