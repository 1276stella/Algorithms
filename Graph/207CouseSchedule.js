/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var convertToAdjacencyList = function(numCourses, edgeList) {
  var adjacencyList = [];
  for(var i = 0; i < numCourses; i++) {
    adjacencyList.push({neighbors: []});
  }
  edgeList.forEach(function(edge) {
    var node = edge[1];
    var neighbor = edge[0];
    adjacencyList[node].neighbors.push(neighbor);
  });
  return adjacencyList;
}
var canFinish = function(numCourses, prerequisites) {
  var graph = convertToAdjacencyList(numCourses, prerequisites);

  var marked = {};
  var inStack = {};
  var hasCycle = false;

  var dfs = function(nodeIndex) {
    if(hasCycle) {
      return;
    }
    marked[nodeIndex] = true;
    inStack[nodeIndex] = true;
    // show that this nodeIndex is still in call stack. If in the following search, it is visited again, then
    // it means there is a cycle
    for(var i = 0; i < graph[nodeIndex].neighbors.length; i++) {
      var neighbor = graph[nodeIndex].neighbors[i];
      if(inStack[neighbor]) {
        hasCycle = true;
        return;
      }
      if(!marked[neighbor]) {
        dfs(neighbor);
      }
    } 
    inStack[nodeIndex] = false;
  }

  for(var i = 0; i < graph.length; i++) {
    if(!marked[i]) {
      dfs(i);
    }
  }

  return !hasCycle;
};

var prerequisites = [[1,0],[2,1],[3,2],[1,3],[3,4]];
console.log(canFinish(5, prerequisites)); // false

prerequisites = [[1,0],[2,1],[3,2],[3,4]];
console.log(canFinish(5, prerequisites)); // true