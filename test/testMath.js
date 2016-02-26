import math from "mathjs";

const matrix = math.matrix([
  [1, 2],
  [2, 3]
]);

/*console.log("matrix", matrix);*/

const spMatrix = math.sparse([[0,0],[2,3]]);
const mat = math.matrix([[0,0],[2,3]]);
console.log("spMatrix", spMatrix.map);
console.log("mat", mat);
