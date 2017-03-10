/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// v1: requires extra space
// time complexity O(N) + O(E), where N = n, E is number of edges
var countComponents_v1 = function(n, edges) {
  if(n <= 0) {
    return 0;
  }
  var nodes = convertToAdjacentList(n, edges);
  var visited = {};
  var count = 0;

  // dfs search
  // time complexity O(N) + O(E), where N = n, E is number of edges
  for(var i = 0; i < nodes.length; i++) {
    if(nodes[i].label in visited) {
      continue;
    }
    dfs(nodes[i], visited);
    count++;
  }
  return count;
};
// adjacent list
// time complexity O(N) + O(E), where N = n, E is number of edges
var convertToAdjacentList = function(n, edges) {
  var nodes = [];
  for(var i = 0; i < n; i++) {
    nodes[i] = new Node(i);
  }
  for(var i = 0; i < edges.length; i++) {
    var nodeLabel = edges[i][0];
    var neighborLabel = edges[i][1];
    nodes[nodeLabel].neighbors.push(nodes[neighborLabel]);
    nodes[neighborLabel].neighbors.push(nodes[nodeLabel]);
  }  
  return nodes;
};
var dfs = function(node, visited) {
  visited[node.label] = true;
  for(var i = 0; i < node.neighbors.length; i++) {
    var neighbor = node.neighbors[i];
    if(neighbor.label in visited) {
      continue;
    }
    dfs(neighbor, visited);
  }
};
function Node(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
};


// v2
// uinion_find
var countComponents_v2 = function(n, edges) {
  var id = [];
  for(var i = 0; i < n; i++) {
    id[i] = i;
  }
  for(var i = 0; i < edges.length; i++) {
    var root0 = findRoot(id, edges[i][0]);
    var root1 = findRoot(id, edges[i][1]);

    if(root0 !== root1) {
      id[root0] = root1;
      n--;
    }
  }
  return n;
};

var findRoot = function(id, node) {
  while(node !== id[node]) {
    node = id[node];
  }
  return node;
};
var edges = [[0, 1], [1, 2], [3, 4]];
console.log(countComponents_v2(5, edges)); // 2

var edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
console.log(countComponents_v2(5, edges)); // 1

var edges = [[1, 0]];
console.log(countComponents_v2(2, edges)); // 1

