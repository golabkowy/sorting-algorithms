const arrayToSort = [4, 5, 6, 7, 89, 1, 2, 3, 6, 78, 4, 3, 3, 7, 9, 4, 5, 6, 9, 0, 0, 8, 2, 6, 4, 8, 1];

function bubleSort() {
    arrayToSort.forEach(() => {
        arrayToSort.forEach((value, index) => {
            if (arrayToSort[index] > arrayToSort[index + 1]) {//here you can decide between ascending and descending sort order by modyfing strict inequality mark
                let temporary = arrayToSort[index];
                arrayToSort[index] = arrayToSort[index + 1]
                arrayToSort[index + 1] = temporary
            }
        });
    });
}
console.log(arrayToSort  + '\n');
bubleSort();
console.log(arrayToSort);





