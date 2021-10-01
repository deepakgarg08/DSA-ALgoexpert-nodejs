//   Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let preorder = [2, 5, 8, 9, 7];
let inorder = [8, 5, 9, 2, 7];
var buildTree = function (preorder, inorder) {
//   console.log("preorder", preorder);
  let preorder_index = 0;
  function array_to_tree(left, right) {
    if (left > right) return null;
    let root_value = preorder[preorder_index];
    console.log("root_value", root_value);
    let root = new TreeNode(root_value);
    console.log("root", root);

    preorder_index++;

    root.left = array_to_tree(left, inorder_index_map[root_value]-1)
    root.right = array_to_tree(inorder_index_map[root_value] +1 , right)

    return root;
  }
  // let preorder_index =0
  let inorder_index_map = {};
  for (let i = 0; i < inorder.length; i++) {
    inorder_index_map[inorder[i]] = i;
}
console.log('inorder_index_map', inorder_index_map)

  return array_to_tree(0, preorder.length - 1);
};

// buildTree(preorder, inorder);
console.log('buildTree(preorder, inorder);', buildTree(preorder, inorder))
