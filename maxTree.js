/**
* @param A: Given an integer array with no duplicates.
* @return: The root of max tree.
*/
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
};
Array.prototype.peek = function() {
	return this.length === 0 ? null : this[this.length - 1];
};
var buildTreeNodes = function(A) {
	return A.map(function(element) {
		return new TreeNode(element);
	});
};
var maxTree = function(A) {
	var nodes = buildTreeNodes(A);
	// for a given node, its parent is the closest element larger than itself either on its left side or on its right side,
	// whichever is smaller.
	// maintain a decremental stack, which stores the index of each element in the array 
	var stack = [];
	var l = A.length;
	A[l] = Number.MAX_SAFE_INTEGER;
	stack.push(l);
	for(var i = 0; i < A.length; i++) {
		// The original thought is if current element A[i] is larger than the topElement in the stack, pop the topElement 
		// from the stack until the topElement is larger than A[i], then topElement is the left closest element larger than A[i].
		// But notice when for the topElment in the stack, then A[i] is the closest element larger than topElement on the right side
		// and the element below topElment in the stack is its left closest index. So target can be the element popped out instead of A[i].
		while(A[i] > A[stack.peek()]) {
			var topElementIndex = stack.pop();
			var left = stack.peek();
			var right = i;
			if(A[left] > A[right]) {
				nodes[right].left = nodes[topElementIndex];
			} else if(A[left] < A[right]) {
				nodes[left].right = nodes[topElementIndex];
			} else {
				maxIndex = topElementIndex;
			}			
		}
		stack.push(i);
	}
	
	return nodes[maxIndex];
};

var A = [2,1,5,6,2,3];
var maxTreeResult = maxTree(A);

var dfs = function(node) {
	if(node === null) {
		return;
	}
	console.log(node.val);
	dfs(node.left);
	dfs(node.right);
}

dfs(maxTreeResult); // 6,5,2,1,3,2
