// Find The Middle Element Of The Linked-List.
const middle = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Detect A Loop In A Linked-List.
const detectLoop = (head) => {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true

    }
    return false;
}