console.log('SelectionSort:')
/* input start */
let input = [8,2,4,3,5,1,7,6];
/* input end */
console.log('> input: ' + input);

function exchange (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// function
function SelectionSort (input) {
  var _len = input.length;
  for (var i = 0; i < _len; i += 1) {
    var min = i;
    for (var j = i + 1; j< _len; j += 1) {
      if (input[min] > input[j]) {
        min = j;
      }
    }
    exchange(input, i, min);
  }
  return input;
}

/* output start */
console.log('> output: ' + SelectionSort(input));
/* output end */