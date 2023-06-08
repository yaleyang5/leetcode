class Solution {
public:
    bool judgeSquareSum(int c) {
        int start = 0, end = sqrt(c);
        while (start <= end) {
            long long sum = (long long) start*start + end*end;
            if (sum == c) {
                return true;
            }
            sum < c ? start++ : end--;
        }
        return false;
    }
};