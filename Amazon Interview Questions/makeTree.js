//given inorder and preorder of tree, construct tree
let preorder = [2,5,8,9,7]
let inorder = [8,5,9,2,7]

class TreeNode{
    constructor(value){
        this.value =value
        this.left = null
        this.right = null
    }
}



function tree(inorder, preorder){
    return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1)
}

function helper(preorder, preLow, preHigh, inorder, inLow, inHigh){

    const root = new TreeNode(inorder[inLow])
    if(preLow>preHigh || inLow>inHigh) return

    let rootInorder =inLow;
    for (let i = 0; i < inorder.length; i++) {
        if(preorder[0] === inorder[i]){
            rootInorder = i
            break
        }
        
    }
    // console.log('rootInorder', rootInorder)
    // let leftTreeLencheck = preorder.length - rootInorder +1
    // console.log('leftTreeLencheck', leftTreeLencheck)
    let leftTreeLen = rootInorder - inLow
    console.log('leftTreeLen', leftTreeLen)
    console.log('rootInorder', rootInorder)
    //array, 1 , 3, arra, 0, 2
    let leftTree = helper(preorder, preLow+1, preLow+leftTreeLen, inorder, inLow, rootInorder-1 )
    let rightTree = helper(preorder, preLow+leftTreeLen+1, preHigh, inorder, rootInorder+1, preHigh)

    return root
}
tree(inorder, preorder)











