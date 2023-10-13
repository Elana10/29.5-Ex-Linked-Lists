/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */
  pop() {
    const removedNode = this.tail;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      let currentNode = this.head;
      while(currentNode.next.next){
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      currentNode.next = null;
    }

    this.length -=1;
    return removedNode.val;

  }

  /** shift(): return & remove first item. */
  shift() {
    const removedNode = this.head;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      let secondNode = this.head.next;
      this.head = secondNode;
    }

    this.length -=1;
    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    let currentNode = this.head
    for(let i = 0; i <= idx; i++){
      if(i === idx){
        return currentNode.val
      } 
      else{
        currentNode = currentNode.next
      }

    }
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    let currentNode = this.head
    for(let i = 0; i <= idx; i++){
      if(i === idx){
        currentNode.val = val
      } 
      else{
        currentNode = currentNode.next
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if(idx === 0){
      this.unshift(val)
      return undefined
    }  
    if(idx === (this.length)){
      this.push(val)
      return undefined
    }

    let currentNode = this.head
    let nextNode = this.head.next
    for(let i = 1; i < this.length; i++){
      if(i === idx){
        currentNode.next = new Node(val)
        currentNode.next.next = nextNode
        this.length +=1;
        return undefined
      }
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if(idx === 0){
      return this.shift()
    }
    if(idx === this.length-1){
      return this.pop()
    }

    let currentNode = this.head
    let nextNextNode = this.head.next.next
    let removedNode =currentNode.next
    for(let i = 1; i <this.length-1; i++){
      if(i === idx){
        currentNode.next = nextNextNode
        return removedNode
      }
      currentNode = currentNode.next
      removedNode = removedNode.next
      nextNextNode = nextNextNode.next
    }

  }

  /** average(): return an average of all values in the list */
  average() {
    if(this.length === 0){
      return 0
    }

    let sum = 0;
    let currentNode = this.head
    for(let i =0; i < this.length; i++){
      sum += currentNode.val
      currentNode = currentNode.next
    }
    return sum/(this.length)    
  }
}

module.exports = LinkedList;
