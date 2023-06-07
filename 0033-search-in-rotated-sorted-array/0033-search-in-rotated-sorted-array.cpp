class Solution {
public:
    int findPivot(vector<int>& nums) {
        int start = 0, end = nums.size() - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] > nums[(mid + 1) % nums.size()]) {
                return mid;
            } else if (nums[mid] < nums[(mid - 1 + nums.size()) % nums.size()]) {
                return mid - 1;
            } else if (nums[mid] > nums[start]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    
    int binarySearch(vector<int>& nums, int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == nums[mid]) {
                return mid;
            } else if (target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    
    int search(vector<int>& nums, int target) {
        int start = 0, end = nums.size() - 1, pivot = findPivot(nums);
        
        if (pivot == -1) {
            return binarySearch(nums, target, 0, end);
        }

        if (target < nums[start]) {
            return binarySearch(nums, target, pivot + 1, end);
        } else {
            return binarySearch(nums, target, start, pivot);
        }
        
    }
};