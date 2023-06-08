class Solution {
public:
    // we start with brute force. let's try sliding window. ans = minimum length.
    int minSubArrayLenSLOWEST(int target, vector<int>& nums) {
        if (nums.size() == 0) {
            return 0;
        } 
        if (nums.size() == 1) {
            if (nums[0] >= target) {
                return 1;
            } else {
                return 0;
            }
        }
        int start = 0, end = 0, ans = INT_MAX;
        long long sum = nums[0];
        while (start <= end && start < nums.size()) {
            cout << "ans: " << ans << ". start, end: "<< start << ", " << end << endl;
            if (sum >= target) {
                ans = min(ans, end - start + 1);
                if (ans == 1) {
                    return 1;
                }
                sum -= nums[start];
                cout << "start++. new sum: " << sum << endl;
                start++;
            } else if (end < nums.size()) {
                end++;
                if (end < nums.size()) {
                    sum += nums[end];
                } else {
                    cout << "Done!" << endl;
                    break;
                }
                cout << "end++. new sum: " << sum << endl;
            } else {
                cout << "I'm here: " << start << ", " << end << endl;
                break;
            }
        }
        return ans == INT_MAX ? 0 : ans;
    }
    
    // success! it takes too long so let's try binary search. we'll iterate through the list and for each element search for the first min in sums, then keep track of the minimum array size. O(n*log(n)) :-)
    
    // to find the minimum element greater than or equal to target in O(log(n))
    int binarySearch(int target, vector<int>& nums, int start, int end) {
        if (start + 1 == end) {
            if (nums[end] - nums[start] >= target) {
                return 1;
            } else {
                return INT_MAX;
            }
        }
        int start1 = start + 1;
        int dif = 0;
        bool first_loop = true;
        while (start1 <= end) {
            int mid = start1 + (end - start1) / 2;
            // cout << "start, mid, end: " << start1 << ", " << mid << ", " << end << endl;
            dif = start == -1 ? nums[mid] : nums[mid] - nums[start];
            if (first_loop) {
                int full_sum = start == -1 ? nums[end] : nums[end] - nums[start];
                if (full_sum < target) {
                    return INT_MAX;
                }
                first_loop = false;
            }
            // cout << "nums[mid] - nums[start]: " << dif << endl;
            if (target < (dif)) {
                // cout << "target is lesser." << endl;
                end = mid - 1;
            } else if (target > (dif)) {
                // cout << "target is greater." << endl;
                start1 = mid + 1;
            } else {
                return mid - start;
            }
        }
        // if start1 >= target and mid < target, return element to the right of where mid would have been -- start! otherwise return INTMAX
        return start1 - start;
    }
    
    int minSubArrayLen(int target, vector<int>& nums) {
        // cout << "Checking for smallest array length where sum >= " << target << endl << endl;
        if (nums.size() == 0) {
            return 0;
        } 
        if (nums.size() == 1) {
            if (nums[0] >= target) {
                return 1;
            } else {
                return 0;
            }
        }
        int start = 0, end = nums.size(), ans = INT_MAX;
        vector<int> sums(nums.size());
        bool n_found = true;
        sums[0] = nums[0];
        // load sums with cummilative sums
        // cout << "Loading sums..." << endl;
        for (int i = 1; i < nums.size(); i++) {
            sums[i] = sums[i - 1] + nums[i];
        }
        // cout << "Done loading sums." << endl;
        // cout << "Using binary search to find smallest viable subarray..." << endl;
        // cout << endl << "Starting binary search from element: 0" << endl;
        int temp = binarySearch (target, sums, -1, nums.size() - 1);
        // temp is the minimal length array with sum >= target
        // cout << "temp: " << temp << endl;
        if (temp > nums.size()) {
            // cout << "temp > size of array, see ya losers" << endl;
            return 0;
        }
        if (temp > 0) {
            ans = min(INT_MAX, temp);
        }
        for (int i = 1; i < nums.size(); i++) {
            // use binary search from i to find smallest viable subarray sum from i
            // cout << endl << "Starting binary search from element: " << i << endl;
            int temp = binarySearch (target, sums, i - 1, nums.size() - 1);
            // temp is the minimal length array with sum >= target
            // cout << "temp: " << temp << endl;
            if (temp == nums.size()) {
                return temp;
            }
            if (temp < INT_MAX && temp > nums.size()) {
                // cout << "temp > size of array, see ya losers" << endl;
                return 0;
            }
            if (temp > 0) {
                ans = min(ans, temp);
            }
            // cout << "current ans: " << ans << ", current temp: " << temp << endl;
        }  
        // cout << "binary search done. \nanswer: " << ans << endl << endl;
        return ans == INT_MAX ? 0 : ans;
    }
    
    // *******success!!! WHY IS IT TAKING SO LONG? :D it's bc i was printing shit nm*******
//     int minSubArrayLen(int s, vector<int>& nums)
// {
//     int n = nums.size();
//     if (n == 0)
//         return 0;
//     int ans = INT_MAX;
//     vector<int> sums(n + 1, 0); //size = n+1 for easier calculations
//     //sums[0]=0 : Meaning that it is the sum of first 0 elements
//     //sums[1]=A[0] : Sum of first 1 elements
//     //ans so on...
//     for (int i = 1; i <= n; i++)
//         sums[i] = sums[i - 1] + nums[i - 1];
//     for (int i = 1; i <= n; i++) {
//         int to_find = s + sums[i - 1];
//         auto bound = lower_bound(sums.begin(), sums.end(), to_find);
//         if (bound != sums.end()) {
//             ans = min(ans, static_cast<int>(bound - (sums.begin() + i - 1)));
//         }
//     }
//     return (ans != INT_MAX) ? ans : 0;
// }
};