function selectSort(arr) {
    if (Array.isArray(arr)) {
        let len = arr.length;
        var temp;
        for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[i]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        // let tem = [];
        // min = arr[0];
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i] < min) {
        //         min = arr[i];
        //         tem.push(min);
        //         arr.splice(i, 1);
        //     }
        // }
        // return tem;
    } else {
        return
    }
}

let arr = [3, 5, 1, 4, 9, 3, 5]
    // console.log(selectSort(arr));
selectSort(arr);
console.log(arr);