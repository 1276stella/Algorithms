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