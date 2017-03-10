/**
 * Definition for directed graph.
 * this.neighbors: array of DirectedGraphNode, successors (the nodes which come after the current node) 
 * of the current node
 * function DirectedGraphNode(label) {
 *   this.label = label;
 *   this.neighbors = []; 
 * }
 */
/**
 * Version 1 DFS
 * use a stack to store nodes. Push a node to a stack only if all of its neighbors/successors have
 * been visited/marked (which means they are already in the stack). After dfs traverse the graph
 * is done, pop out all the nodes from the stack and they are in topological order.
 * @param {DirectedGraphNode} graph
 * @return {Array} labels of graph nodes in topological order
 */
var topologicalSortDFS = function(graph) {
  var marked = {};
  var stack = [];

  var dfs = function(node) {
    marked[node.label] = true;
    for(var i = 0; i < node.neighbors.length; i++) {
      var neighbor = node.neighbors[i];
      if(!marked[neighbor.label]) {
        dfs(neighbor);
      }
    } 
    stack.push(node.label);
  }

  for(var i = 0; i < graph.length; i++) {
    var node = graph[i];
    if(!marked[node.label]) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Version 2 BFS
var topologicalSortBFS = function(graph) {
  var indegree = {}; // indegree of each node
  var map = {}; // map from label to node
  graph.forEach(function(node) {
    map[node.label] = node;
    if(!indegree.hasOwnProperty(node.label)) {
      indegree[node.label] = 0;
    }
    node.neighbors.forEach(function(neighbor) {
      if(!indegree.hasOwnProperty(neighbor.label)) {
        indegree[neighbor.label] = 1;
      } else {
        indegree[neighbor.label]++;
      }
    });
  })

  var queue = [];
  var result = [];
  for(var nodeLabel in indegree) {
    if(indegree[nodeLabel] === 0) {
      queue.push(map[nodeLabel]);
    }
  }

  while(queue.length !== 0) {
    var node = queue.shift();
    result.push(node.label);
    node.neighbors.forEach(function(neighbor){
      indegree[neighbor.label]--;
      if(indegree[neighbor.label] === 0) {
        queue.push(neighbor);
      }
    });
  }
  return result;
}
// Test case
// Definition for directed graph.
function DirectedGraphNode(label) {
  this.label = label;
  this.neighbors = []; //Array of DirectedGraphNode
}
/**
 * A -> B -> C <- D 
 */
var nodeA = new DirectedGraphNode('A');
var nodeB = new DirectedGraphNode('B');
var nodeC = new DirectedGraphNode('C');
var nodeD = new DirectedGraphNode('D');

nodeA.neighbors.push(nodeB);
nodeB.neighbors.push(nodeC);
nodeD.neighbors.push(nodeC);

var graph = [];
graph.push(nodeA);
graph.push(nodeB);
graph.push(nodeC);
graph.push(nodeD);

console.log(graph);
// console.log(topologicalSortDFS(graph)); // [ 'D', 'A', 'B', 'C' ]
console.log(topologicalSortBFS(graph)); // [ 'A', 'D', 'B', 'C' ]
