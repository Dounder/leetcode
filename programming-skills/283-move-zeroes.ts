/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let writeIndex = 0;

  // Move all non-zero elements to the front
  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  // Fill remaining positions with zeros
  while (writeIndex < nums.length) {
    nums[writeIndex] = 0;
    writeIndex++;
  }
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
