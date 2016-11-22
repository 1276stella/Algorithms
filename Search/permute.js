/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    /**
     * traverse a search tree
     * @param {number[][]} results - stores all permutations
     * @param (number[]) solution - stores the dynammic tree node of the search tree
     * @param {object} inSolution - a hash map to track if an element is in solution or not
     * @param {number[]} nums - original number array
     * @return {undefined}
     */
    var traverse = function(results, solution, inSolution, nums) {
        if(solution.length === nums.length) {
            results.push(solution.slice());
            return;
        }
        
        for(var i = 0; i < nums.length; i++) {
            var num = nums[i];
            if(!inSolution[num]) {
                solution.push(num);
                inSolution[num] = true;
                traverse(results, solution, inSolution, nums);
                solution.pop(num);
                inSolution[num] = false;
            }
        }
    }
    
    var results = [];

    var inSolution = {};
    traverse(results, [], inSolution, nums);
    return results;
};

// var nums = [1,2,3];
// console.log(permute(nums));

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

// var nums = [1,2,1];
// console.log(permuteUnique(nums));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var traverse = function(results, solution, startIndex, nums) {
        results.push(solution.slice());
        if(solution.length === nums.length) {
            return;
        }
        
        for(var i = startIndex; i < nums.length; i++) {
            var num = nums[i];
            solution.push(num);
            traverse(results, solution, i + 1, nums);
            solution.pop(num);
        }
    }
    
    var results = [];

    traverse(results, [], 0, nums);
    return results;    
};

var subsetsWithDup = function(nums) {
    var traverse = function(results, solution, startIndex, nums) {
        results.push(solution.slice());
        if(solution.length === nums.length) {
            return;
        }
        
        // indicates if the same element in the same level iteration is added or not
        var isInSameLevel = {};
        // the same level iteration
        for(var i = startIndex; i < nums.length; i++) {
            var num = nums[i];
            // traverse should go deeper only if the same value element has not been visited for the iteration at this level
            if(!isInSameLevel[num]) {
                solution.push(num);
                traverse(results, solution, i + 1, nums);
                solution.pop(num);
                isInSameLevel[num] = true;
            }
        }
    }
    
    var results = [];
    nums.sort();
    traverse(results, [], 0, nums);
    return results;    
};

var nums = [1,2,1];
console.log(subsetsWithDup(nums));