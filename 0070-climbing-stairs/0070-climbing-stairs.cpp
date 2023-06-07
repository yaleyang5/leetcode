class Solution {
public:
    int climbStairs(int n) {
        // n == 0 -> 1
        // n == 1 -> 1
        // n == 2 -> 2
        // n == 3 -> 3
        // n == 4 -> 5
        // n == 5 -> 8
        // n == 6 -> 13
        // 1 1 2 3 5 8 13 21
        // if(n == 1) return 1;
        // int ans = 1;
        // int temp = 1;
        // int newans = 1;
        // for(int i = 1; i < n; i++) {
        //     newans = ans + temp;
        //     temp = ans;
        //     ans = newans;
        // }
        // return ans;
        int pog[n+1];
        std::fill_n(pog, n, -1);
        pog[0] = 1;
        pog[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            pog[i] = pog[i-1] + pog[i-2];
        }
        
        return pog[n];
    }
};