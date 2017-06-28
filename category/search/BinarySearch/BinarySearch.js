console.log('BinarySearch:')
/* input start */
var input = [1,2,3,5,7,8,9,14,56,76,88,95,101];
var key = 5;
/* input end */
console.log('> input: ' + input);

/**
 * 只是简单实现，具体边界条件等依照需求稍作调整
 * @param {any} key 
 * @param {any} input 
 * @returns 
 */
function BinarySearch (key, input) {
  var low = 0, high = input.length - 1;
  while (low <= high) {
    var mid = parseInt(low + (high - low)/2);
    if (input[mid] < key) {
      low = mid + 1;
    }
    if (input[mid] > key) {
      high = mid - 1;
    }
    if (input[mid] == key) {
      return mid;
    }
  }
  return -1;
}
/* output start */
console.log('> output: ' + BinarySearch(key, input));
/* output end */