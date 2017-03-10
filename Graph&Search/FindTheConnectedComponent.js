/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
// BFS to find the shortest path between two nodes 
var connectedSet = function(nodes) {
  var results = [], visited = {};
  for(var i = 0; i < nodes.length; i++) {
    if(nodes[i].label in visited) {
      continue;
    }
    var result = bfs(nodes[i], visited);
    results.push(result);
  }
  return results;
};

var bfs = function(s, visited) {
  var queue = [], result = [];
  queue.push(s), visited[s.label] = true;
  while(queue.length > 0) {
    var length = queue.length;
    for(var i = 0; i < length; i++) {
      var node = queue.shift();
      result.push(node.label);
      for(var j = 0; j < node.neighbors.length; j++) {
        var neighbor = node.neighbors[j];
        if(!(neighbor.label in visited)) {
          queue.push(neighbor);
          visited[neighbor.label] = true;
        }
      }
    }
  }  
  result.sort();
  return result;
};
var UndirectedGraphNode = function(label) {
  this.label = label;
  this.neighbors = [];
}

var node1 = new UndirectedGraphNode('A');
var node2 = new UndirectedGraphNode('B');
var node3 = new UndirectedGraphNode('D');
node1.neighbors.push(node2);
node1.neighbors.push(node3);

node2.neighbors.push(node1);
node2.neighbors.push(node3);

node3.neighbors.push(node1);
node3.neighbors.push(node2);

var node4 = new UndirectedGraphNode('C');
var node5 = new UndirectedGraphNode('E');
node4.neighbors.push(node5);
node5.neighbors.push(node4);

var nodes = [];
nodes.push(node1);
nodes.push(node2);
nodes.push(node3);
nodes.push(node4);
nodes.push(node5);
console.log(connectedSet(nodes));