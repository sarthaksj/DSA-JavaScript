// Stack-(LIFO) Implementation Using Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.length;
    }


    pop() {
        if (!this.first) return false;

        const popped = this.first;

        if (this.first === this.last) this.last = null;

        this.first = popped.next;
        this.length--;

        return popped.value;
    }
}


// Stack-(LIFO) Implementation Using Array

class Stack {
    constructor() {
        this.data = []
    }

    push(value) {
        this.data.push(value);
        return this.data.length;
    }

    pop() {
        return this.data.pop();
    }
}



const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.pop()
stack.pop()