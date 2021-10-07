const DFSPostOrder = function (root) {
    let data = [];

    const traversePostOrder = function (root) {
        if (root.left) traversePostOrder(root.left);
        if (root.right) traversePostOrder(root.right);
        data.push(root);
    }

    traversePostOrder(root);
    return data;
};