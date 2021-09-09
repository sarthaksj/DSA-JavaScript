class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }


    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }


    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }


    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }


    findElementAtIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }


    get(index) {
        return this.findElementAtIndex(index);
    }


    set(index, value) {
        const idxNode = this.findElementAtIndex(index);

        if (idxNode) {
            idxNode.value = value;
            return true;
        }
        return false;
    }


    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(value);

        if (index === 0) return !!this.unshift(value);

        const newNode = new Node(value);

        let previous = this.findElementAtIndex(index - 1);
        let temp = previous.next;

        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === this.length - 1) return this.pop();

        if (index === 0) return this.shift();

        let previous = this.findElementAtIndex(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;

        return removed;
    }

}

const list = new LinkedList();
