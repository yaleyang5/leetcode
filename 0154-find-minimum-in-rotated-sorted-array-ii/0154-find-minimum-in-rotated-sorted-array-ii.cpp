class Solution {
public:
    int findPivot(vector<int>& nums) {
        int start = 0, end = nums.size() - 1;
        if (nums[0] < nums[end]) {
            return -1;
        }
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[start] > nums[(start + 1) % nums.size()]) {
                return start;
            } else if (nums[end] > nums[(end + 1) % nums.size()]){
                return end;
            } else if (nums[mid] == nums[start] && nums[mid] == nums[end]) {
                start++;
                end--;
            } else if (nums[mid] > nums[(mid + 1) % nums.size()]) {
                return mid;
            } else if (nums[(mid - 1 + nums.size()) % nums.size()] > nums[mid]) {
                return (mid - 1 + nums.size()) % nums.size();
            } else if (nums[mid] >= nums[start]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    
    int findMin(vector<int>& nums) {
        return nums[findPivot(nums) + 1];
    }
};