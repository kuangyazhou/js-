function qSort(list) {
    if (list.length < 1) {
        return;
    }
    let lesser = [];
    let greater = [];
    let pivot = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}