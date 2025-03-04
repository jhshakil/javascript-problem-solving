// number-of-good-pairs
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numPairs(nums) {
  let count = 0;
  let freqMap = {};

  for (let num of nums) {
    if (freqMap[num]) {
      count += freqMap[num];
      freqMap[num]++;
    } else {
      freqMap[num] = 1;
    }
  }

  return count;
}

console.log(numPairs([1, 2, 3, 1, 1, 3]));
