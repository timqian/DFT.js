/**
 * Generate linear space pointes
 * @param  {number} start starting point
 * @param  {number} end
 * @param  {number} num   num of points
 * @return {array}       points array
 */
function linspace(start, end, num) {
  if(num < 2) throw new Error('lattice num < 2');

  const h = (end - start) / (num - 1);

  let arr = new Array(num);
  arr[0] = start;
  arr[num-1] = end;

  for(let i=1; i<num-1; i++){
    arr[i] = arr[i-1] + h;
  }

  return arr;
}

export default linspace;
