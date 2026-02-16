function twoSum(nums: number[], target: number): number[] {
    const map: {} = {}

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let complement = target - x;

        if (map.hasOwnProperty(complement.toString())) {
            return [map[complement.toString()], i];
        }

        map[x.toString()] = i
    }
};