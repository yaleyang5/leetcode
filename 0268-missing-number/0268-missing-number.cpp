class Solution {
public:
    int missingNumber(vector<int>& nums) {
        if (nums.size() == 0) {
            return -1;
        }
        sort(nums.begin(), nums.end());
        if (nums.size() == 1) {
            return nums[0] == 0 ? 1 : 0;
        }
        int i = 0;
        for (i = 0; i < nums.size(); i++) {
            if (nums[i] != i) {
                return i;
            }
        }
        return i;
    }
};