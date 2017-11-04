//列表类
class List {
    constructor() {
        //listSize 列表的元素个数
        //pos 列表的当前位置
        //length 返回列表中元素的个数
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prve;
        this.next = next;
        this.hasNext;
        this.pasPrev;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.contains = contains;
    }
}

class Person {
    constructor(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
    };
    fullName() {
        console.log(this.first + this.middle + this.last)
    }
}

let paul = new Person(1, 2, 3);
paul.fullName();

//选择排序
function selectionsort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        temp = this.dataStore[outer];
        this.dataStore[outer] = this.dataStore[min];
        this.dataStore[min] = temp;
    }
}