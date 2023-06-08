class Solution {
public:
    Solution(vector<int>& nums)
        : orig(nums), shuf(nums)
    {}
    
    vector<int> reset() {
        return orig;
    }
    
    vector<int> shuffle() {
        recursive_shuffle(&shuf[0], shuf.size());
        return shuf;
    }
    
    static int* recursive_shuffle(int* arr, int n) {
        if (n <= 1) {
            return arr;
        }
        int r = rand() % n;
        int t = arr[0];
        arr[0] = arr[r];
        arr[r] = t;
        return recursive_shuffle(arr + 1, n - 1);
    }
private:
    vector<int> orig, shuf;
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(nums);
 * vector<int> param_1 = obj->reset();
 * vector<int> param_2 = obj->shuffle();
 */