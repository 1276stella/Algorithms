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

var nums = [1,2,3];
console.log(permute(nums));