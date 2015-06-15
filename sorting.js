
var bubbleSort = function(array){
	var isSwapped = 0;
	var tempArr = [];
	var temp1, temp2;
	for (var i = 0; i<array.length-1; i++){
		if (array[i] > array[i+1]) {
			isSwapped++;
			swap(array,i, i+1);
		}
	}
	if (isSwapped === 0) return array;
	return bubbleSort(array);
};
function swap (arr, i, j){
	var prevVal = arr[i];
	arr[i] = arr[j];
	arr[j] = prevVal
	return arr;
}

var merge = function(array1, array2){
    //assumptions -> both arrays already sorted.
    var newArr = [];
    while (array1.length > 0 && array2.length > 0){
        if (array1[0] < array2[0]){
            newArr.push(array1.shift());
        }
        else if (array1[0] >= array2[0]){
            newArr.push(array2.shift());
        }
    }
    newArr = newArr.concat(array1).concat(array2);
    return newArr;
};

var split = function(array){
	var middleIndex = array.length/2;
	var right = array;
	var left = right.splice(0, middleIndex);
	return [left, right];
}

var mergeSort = function(array){
	if(array.length <= 1) return array;
	var halves = split(array);
	var left = mergeSort(halves[0]);
	var right = mergeSort(halves[1]);
	return merge(left, right);
};


//the Nick/Christian way (not functional)
// var split = function(array){
// 	var leftArr = [], rightArr = [];
// 	var middleIndex = array.length/2;
// 	for (var i = 0; i<array.length; i++){
// 		if (i< middleIndex) leftArr.push(array[i]);
// 		else rightArr.push(array[i]);
// 	}
// 	if (array.length === 1) return array;
// 	return [split(leftArr), split(rightArr)];
// }

// var mergeSort = function(array){
// 	var splitArr = split(array);
// 	return splitArr;
// }







