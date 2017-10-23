class Node {
  constructor (value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  insert (value, after) {
    const nodeToInsert = new Node(value);
    if (!this.head) {
      this.head = nodeToInsert;
      this.tail = nodeToInsert;
      return;
    }
    const node = this._findNode(after);
    if(!node) return
    const originalNext = node.next;
    node.next = nodeToInsert;
    if (originalNext) nodeToInsert.next = originalNext;
    else this.tail = nodeToInsert;
  }

  _findNode (value) {
    if (!this.head) return null;
    if (this.head.value === value) return this.head;
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
      if (cur.value === value) return cur;
    }
    return null;
  }

  push (value) {
    const nodeToInsert = new Node(value, null);
    if (!this.tail) {
      this.head = nodeToInsert;
      this.tail = nodeToInsert;
    } else {
      this.tail.next = nodeToInsert;
      this.tail = nodeToInsert;
    }
  }

  remove (after) {
    const prevNode = this._findNode(after)
    if(!prevNode) return
    if(prevNode.next){
      const nextNode = prevNode.next.next
      if(!nextNode) this.tail = prevNode
      prevNode.next.next = null
      prevNode.next = nextNode
    }
  }

}

function linkedListTests() {

  const arr = new Array(1000000)
  for (var i = 0; i < 1000000; i++) {
    arr[i] = i
  }


  console.time('shifting array element');

  for (var i = 0; i < 1000; i++) {
    arr.shift()
  }

  console.timeEnd('shifting array element');

  
  const linkedList = new LinkedList()

  for (var i = 0; i < 1000000; i++) {
    linkedList.push(i)
  }


  console.time('shifting a linked list');

  for (var i = 0; i < 100000; i++) {
    linkedList.remove(0)
  }

  console.timeEnd('shifting a linked list');

}

linkedListTests()