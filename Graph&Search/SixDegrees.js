/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
// BFS to find the shortest path between two nodes 
var sixDegrees = function(s, t) {
  var distance = 0;
  var queue = [], visited = {};
  queue.push(s), visited[s.label] = true;
  while(queue.length > 0) {
    var length = queue.length;
    for(var i = 0; i < length; i++) {
      var node = queue.shift();
      if(node === t) {
        return distance;
      }
      
      for(var j = 0; j < node.neighbors.length; j++) {
        var neighbor = node.neighbors[j];
        if(!(neighbor.label in visited)) {
          queue.push(neighbor);
          visited[neighbor.label] = true;
        }
      }
    }
    distance++;
  }
  return -1;
};

var UndirectedGraphNode = function(label) {
  this.label = label;
  this.neighbors = [];
}

var node1 = new UndirectedGraphNode(1);
var node2 = new UndirectedGraphNode(2);
var node3 = new UndirectedGraphNode(3);
var node4 = new UndirectedGraphNode(4);

node1.neighbors.push(node2);
node1.neighbors.push(node3);

node2.neighbors.push(node1);
node2.neighbors.push(node4);

node3.neighbors.push(node1);
node3.neighbors.push(node4);

node4.neighbors.push(node2);
node4.neighbors.push(node3);

console.log(sixDegrees(node1, node4));