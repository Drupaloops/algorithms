console.log('MergeSort:')
/* input start */
let input = [8,2,4,3,5,1,7,6];
/* input end */
console.log('> input: ' + input);

function merge (arr, low, mid, high) {
  var i = low, j = mid + 1;
  for (var k = low; k <= high; k += 1) {
    a[k] = arr[k];
  }
  for (var k = low; k <= high; k ++) {
    if (i > mid) {
      arr[k] = a[j++];
    } else if (j > high) {
      arr[k] = a[i++];
    } else if (a[j] < a[i]) {
      arr[k] = a[j++];
    } else {
      arr[k] = a[i++];
    }
  }
  return arr;
}

// function
function MergeSort (input, low, high) {
  if (high <= low) {
    return input;
  }
  var mid = parseInt(low + (high - low)/2);
  MergeSort(input, low, mid);
  MergeSort(input, mid + 1, high);
  merge(input, low, mid, high);
}

var a = new Array(input.length)
MergeSort(input, 0, input.length - 1)
/* output start */
console.log('> output: ' + input);
/* output end */