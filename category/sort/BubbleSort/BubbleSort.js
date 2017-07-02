console.log('BubbleSort:')
/* input start */
let input = [8,2,4,3,5,1,7,6];
/* input end */
console.log('> input: ' + input);

// function
function BubbleSort(arr) {
    var _len = arr.length;
    for (var i = 0; i < _len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/* output start */
console.log('> output: ' + BubbleSort(input));
/* output end */