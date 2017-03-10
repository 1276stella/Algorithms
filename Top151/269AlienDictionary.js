/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  var hash = {}, order = "";
  var buildGraph = function(rStart, rEnd, col) {
    if(rStart >= rEnd) {
      return;
    }
    var row = rStart;
    console.log('rStart', rStart, 'rEnd', rEnd, 'col', col)

    while(row + 1 <= rEnd) {
      // console.log(row, col, words[row])
      if(col < words[row].length && col >= words[row + 1].length) {
        // console.log(words[row], col)
        order = "invalid";
        return;
      }

      if(col >= words[row].length) {
        rStart = ++row;
        continue;
      }
      while(row + 1 <= rEnd && words[row][col] === words[row + 1][col]) {
        row++;
      }
      if(row !== rStart) {
        buildGraph(rStart, row, col + 1);
      }
      var node_i = getNode(words[row][col]);
      var node_j = getNode(words[row + 1][col]);
      var exist = false;
      for(var k = 0; k < node_i.neighbors.length; k++) {
        if(node_j === node_i.neighbors[k]) {
          exist = true;
        }
      }
      if(!exist) {
        node_i.neighbors.push(node_j);
      }
      rStart = ++row;
    }
  };  

  var getNode = function(label) {
    if(label in hash) {
      return hash[label];
    }
    var node = new GraphNode(label);
    hash[label] = node;
    return node;
  };

  buildGraph(0, words.length - 1, 0);
  if(order === "invalid") {
    return "";
  }
  var graph = [];
  for(var label in hash) {
    graph.push(hash[label]);
  }
  return topologicalSortBFS(graph);
};

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
  console.log("graph", graph);
  console.log("result", result);
  if(result.length !== graph.length) {
    return "";
  }
  return result;
};

var GraphNode = function(label) {
  this.label = label;
  this.neighbors = [];
};

var words = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
];
console.log(alienOrder(words));

// var words = [
//   "z",
//   "x",
//   "z"
// ];
// console.log(alienOrder(words));