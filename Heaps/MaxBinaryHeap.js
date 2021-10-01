class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp(this.values);
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (true) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }

    }
}