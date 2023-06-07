class Solution {
public:
    // we will simply REMOVE the elements as the function calls.
    int removeElement(vector<int>& nums, int val) {
        int size = nums.size(), i = 0;
        if (size == 0 || (size == 1 && nums[0] == val)) return 0;
        else if (size == 1) return 1;
        
        for (i = 0; i < size; i++) {
            if (nums[i] == val) {
                for (int j = i; j < size-1; j++) {
                    nums[j] = nums[j+1];
                }
                i--;
                size--;
            }
        }
        return i;
    }
};




