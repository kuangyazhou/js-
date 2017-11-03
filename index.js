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