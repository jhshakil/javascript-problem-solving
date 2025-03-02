// concatenation-of-array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and
// ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

function getConcatenation(nums) {
  return nums.concat(nums);
}

const nums = [1, 2, 1];
console.log(getConcatenation(nums));
