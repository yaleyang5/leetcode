class Solution {
public:
    // does not work with repeated elements.
    // pivot is the only element where the next element is strictly smaller
    int findPivotOld(vector<int>& nums) {
        int start = 0, end = nums.size() - 1;
        if (nums[0] < nums[end]) {
            return -1;
        }
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] > nums[(mid + 1) % nums.size()]) {
                return mid;
            } else if (nums[mid] < nums[(mid - 1 + nums.size()) % nums.size()]) {
                return (mid - 1 + nums.size()) % nums.size();
            } else if (nums[mid] > nums[start]) {
                // pivot is on the right side if this is true
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        // pivot not found / 0 rotation
        return -1;
    }
    
    // works with repeated elements!!
    // pivot is the only element where the next element is strictly smaller
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
            } else if (nums[mid] == nums[start] && nums[mid] == nums[end]){
                start++;
                end--;
            } else if (nums[mid] > nums[(mid + 1) % nums.size()]) {
                // found the pivot
                return mid;
            } else if (nums[mid] < nums[(mid - 1 + nums.size()) % nums.size()]) {
                // found the element after the pivot
                return (mid - 1 + nums.size()) % nums.size();
            } else if (nums[mid] >= nums[start]) {
                // pivot is on the right side if this is true
                start = mid + 1;
            } else {
                // pivot is on the left side if mid << start
                end = mid - 1;
            }
        }
        // pivot not found / 0 rotation
        return -1;
    }
    
    bool binarySearch(vector<int>& nums, int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == nums[mid]) {
                return true;
            } else if (target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return false;
    }
    
    
    bool search(vector<int>& nums, int target) {
        int pivot = findPivot(nums);
        // if true, then target in right hand side of array
        cout << "pivot: " << pivot << endl;
        if (pivot == -1) {
            return binarySearch(nums, target, 0, nums.size() - 1);
        }
        
        if (target < nums[0]) {
            if (target == nums[nums.size() - 1]) {
                return true;
            }
            return binarySearch(nums, target, pivot + 1, nums.size() - 1);
        } else {
            if (target == nums[0]) {
                return true;
            }
            return binarySearch(nums, target, 0, pivot);
        }
    }
};