const DFSPreOrder = function (root) {
    let data = [];

    const traversePreOrder = function (root) {
        data.push(root);
        if (root.left) traversePreOrder(root.left);
        if (root.right) traversePreOrder(root.right);
    }

    traversePreOrder(root);
    return data;
};