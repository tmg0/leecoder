export function twoSum(nums: number[], target: number): number[] {
  const ans = {}
  for (let i = 0; i < nums.length; i++) {
      const e = nums[i]
      if (ans[e] !== undefined) {
          return [ans[e], i]
      }
      ans[target - e] = i
  }
  return []
};