const breadthFirstSearch = function (root) {
    let node = root,
        data = [],
        queue = [];

    queue.push(node);

    while (queue.length) {
        node = queue.shift();
        data.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return data;
}