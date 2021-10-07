const DFSInOrder = function (root) {
    let data = [];

    const traverseInOrder = function (root) {
        if (root.left) traverseInOrder(root.left);
        data.push(root);
        if (root.right) traverseInOrder(root.right);
    }
    traverseInOrder(root);

    return data;
};