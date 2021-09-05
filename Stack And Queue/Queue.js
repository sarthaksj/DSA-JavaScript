// Stack-(FIFO) Implementation Using Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length;
    }


    dequeue() {
        if (!this.first) return null;
        const dequed = this.first;

        if (this.first === this.last) this.last = null;

        this.first = dequed.next;
        this.length--;
        return dequed.value;
    }
}




// Stack-(FIFO) Implementation Using Array

// ***Note***
// Not Good In performance as we are removing 
// From the front using shift and it will re-index 
// Every item in the array on every pop.

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.push(value);
        return this.data.length;
    }

    dequeue() {
        return this.data.shift();
    }
}


const stack = new Queue();
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.pop()
stack.pop()