console.log('InsertionSort:')
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
function InsertionSort (input) {
  var _len = input.length;
  for (var i = 1; i < _len; i += 1) {
    for (var j = i; j > 0 && input[j] < input[j - 1]; j -= 1) {
      exchange(input, j, j - 1);
    }
  }
  return input;
}

/* output start */
console.log('> output: ' + InsertionSort(input));
/* output end */