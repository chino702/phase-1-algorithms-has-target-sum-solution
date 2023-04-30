function hasTargetSum(array, target) {
  const seen = new Set();
  
  for (const num of array) {
    const complement = target - num;
    
    if (seen.has(complement)) {
      return true;
    }
    
    seen.add(num);
  }
  
  return false;
}


/* 
 The time complexity of this function is O(n) because it iterates through the array once to build the hash table and then iterates through the array again to check if there is a pair that sums up to the target. The time taken by hash table operations is O(1) on average, so the time complexity of building the hash table is also O(n). Therefore, the overall time complexity of the function is O(n).
*/

/* 
Sort the array in ascending order.
Initialize two pointers, left and right, to the first and last index of the array, respectively.
While left is less than right:
Compute the sum of the values at left and right indices.
If the sum is equal to the target, return true.
If the sum is greater than the target, decrement right.
If the sum is less than the target, increment left.
If the loop completes and no pair of values has a sum equal to the target, return false.*/

/*
This function is called hasTargetSum and it takes two arguments: an array of numbers and a target number. The goal of the function is to check if there are any two numbers in the array that add up to the target number. If there are, it should return true. If not, it should return false.

To solve this problem, we can use a nested loop to check all possible pairs of numbers in the array. For each pair of numbers, we can add them together and check if the result is equal to the target number. If it is, we can return true. If we finish checking all possible pairs and none of them add up to the target number, we can return false.

The time complexity of this function is O(n^2) because it has to check all possible pairs of numbers in the array.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
