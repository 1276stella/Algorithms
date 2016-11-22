/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

// Version 1: dfs 
// var cloneGraph = function(graph) {
//     var visitedMap = {};
//     var cloneMap = {};
//     var dfs = function(node) {
//         var label = node.label;
//         var clonedNode;
//         if(!cloneMap.hasOwnProperty(label)) {
//             clonedNode = new UndirectedGraphNode(label);
//             cloneMap[label] = clonedNode;
//         } else{
//             clonedNode = cloneMap[label];
//         }
//         visitedMap[label] = true;
        
//         for(var i = 0; i < node.neighbors.length; i++) {
//             var neighbor = node.neighbors[i];
//             label = neighbor.label;
//             var clonedNeighbor;
//             if(!cloneMap.hasOwnProperty(label)) {
//                 clonedNeighbor = new UndirectedGraphNode(label);
//                 cloneMap[label] = clonedNeighbor;
//             } else{
//                 clonedNeighbor = cloneMap[label];
//             }       
//             clonedNode.neighbors.push(clonedNeighbor);
            
//             if(!visitedMap[label]) {
//                 dfs(neighbor);
//             }
//         }
//     }
//     if(graph === null) {
//         return graph;
//     }    
//     dfs(graph);
//     return cloneMap[graph.label];
// };

// Version 2: bsf
var cloneGraph = function(graph) {
    if(graph === null) {
        return graph;
    }   

    var visitedMap = {};    
    var cloneMap = {};
    var bfs = function(node) {
        var queue = [];
        queue.push(node);
        var label = node.label;
        visitedMap[label] = true;

        while(queue.length !== 0) {
            node = queue.shift();
            label = node.label;
            var clonedNode;
            if(!cloneMap.hasOwnProperty(label)) {
                clonedNode = new UndirectedGraphNode(label);
                cloneMap[label] = clonedNode;
            } else{
                clonedNode = cloneMap[label];
            }

        
            for(var i = 0; i < node.neighbors.length; i++) {
                var neighbor = node.neighbors[i];
                label = neighbor.label;
                var clonedNeighbor;
                if(!cloneMap.hasOwnProperty(label)) {
                    clonedNeighbor = new UndirectedGraphNode(label);
                    cloneMap[label] = clonedNeighbor;
                } else{
                    clonedNeighbor = cloneMap[label];
                }       
                clonedNode.neighbors.push(clonedNeighbor);
                // console.log('clonedNode', clonedNode.label);
                // console.log('clonedNeighbor', clonedNeighbor.label);

                if(!visitedMap[label]) {
                    queue.push(neighbor);
                    visitedMap[label] = true;
                }                
            }
        }
    }

    bfs(graph);
    return cloneMap[graph.label];    
}

function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

var node0 = new UndirectedGraphNode(0);
var node1 = new UndirectedGraphNode(1);
var node2 = new UndirectedGraphNode(2);

node0.neighbors.push(node1);
node1.neighbors.push(node0);
node1.neighbors.push(node2);
node2.neighbors.push(node2);

console.log(cloneGraph(node0));