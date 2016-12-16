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