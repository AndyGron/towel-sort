
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix === []){
    return [];  }

let arra = [];

matrix.forEach((item, index) => {
  if (index%2 !== 0){arra = arra.concat(item.reverse());}
else { arra = arra.concat(item);}
});
return arra;
}

