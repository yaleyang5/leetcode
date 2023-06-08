class Solution {
public:
    // changed arg numbers => n
    vector<int> twoSum(vector<int>& n, int target) {
        int start = 0, end = n.size() - 1;
        while (start <= end) {
            if (n[start] + n[end] == target) {
                return {start + 1, end + 1};
            } else if (n[start] + n[end] < target) {
                start++;
            } else if (n[start] + n[end] > target) {
                end--;
            } else {
                cout << "help!" << endl;
                break;
            }
        }
        // sum not found
        return {-1, -1};
    }
};