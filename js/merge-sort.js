var arrayToSort = [38, 27, 43, 3, 9, 82, 10];

//TOP DOWN METHOD

// FULL READABLE VERSION
function merge_sort(array) {
    //recursion stop condition
    if (array.length <= 1) {
        return array
    }

    var left = [];
    var right = [];

    for (var i = 0; i < array.length; i++) {
        if (i < array.length / 2) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)

}

function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        var firstLeft = left.shift()
        var firstRight = right.shift()
        if (firstLeft <= firstRight) {
            result.push(firstLeft);
            right.unshift(firstRight);
        } else {
            result.push(firstRight);
            left.unshift(firstLeft);
        }
    }

    //case if elements left
    while (left.length > 0) {
        result.push(left.shift())
    }
    while (right.length > 0) {
        result.push(right.shift())
    }
    return result;
}

//MORE JS STYLE
function jsMergeSort(array) {
    return array.length <= 1 ? array : (() => {
        const leftArray = array.slice(0, Math.ceil(array.length / 2));
        const rightArray = array.slice(Math.ceil((array.length / 2)), array.length);
        return jsMerge(jsMergeSort(leftArray), jsMergeSort(rightArray));
    })();
}

function jsMerge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// var result = jsMergeSort(arrayToSort);
// console.log(result);