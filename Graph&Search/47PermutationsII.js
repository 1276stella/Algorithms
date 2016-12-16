/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var traverse = function(results, solution, visited, nums) {
        if(solution.length === nums.length) {
            results.push(solution.slice());
            return;
        }
        
        // indicates if the same element in the same level iteration is added or not
        var isInSameLevel = {};
        // the same level iteration
        for(var i = 0; i < nums.length; i++) {
            var num = nums[i];
            // traverse should go deeper only if the current element has not been visited/added
            // to solution and the same value element has not been visited for the iteration at
            // this level
            if(!visited[i] && !isInSameLevel[num]) {
                solution.push(num);
                visited[i] = true;
                traverse(results, solution, visited, nums);
                solution.pop(num);
                visited[i] = false;
                isInSameLevel[num] = true;
            }
        }
    }
    
    var results = [];
    var visited = [];
    for(var i = 0; i < nums.length; i++) {
        visited[i] = false;
    }
    traverse(results, [], visited, nums);
    return results;
};

var nums = [1,2,1];
console.log(permuteUnique(nums));