class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // 0.0, 0.1, 0.2, 0.3, 1.0, 1.1, 1.2, 1.3, 2.0, 2.1, 2.2, 2.3
        // to find a coordinate, m.n, we just need to take the 'index' in the matrix (such as 5) and do (5/n).(5%n) = 1.1
        int m = matrix[0].size() * matrix.size(), n = matrix[0].size(), start = 0, end = m - 1;
        // cout << "length is " << m << endl << "each row length is " << n << endl;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == matrix[mid / n][mid % n]) {
                // cout << mid << endl;
                return true;
            } else if (target > matrix[mid / n][mid % n]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return false;
    }
};