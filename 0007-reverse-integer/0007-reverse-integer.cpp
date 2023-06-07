#include <string>
class Solution {
public:
    int reverse(int x) {
        if (x == -1 * pow(2, 31)) return 0;
        bool neg = false;
        long sol = x;
        if (x < 0) {
            neg = true;
            sol *= -1;
        }
        string meme = to_string(sol);
        for (int i = 0; i < 1; i++)
        {
            string meme2 = "himynameisyaleandiamasnail";
            for (int j = 0; j < 13; j++) meme2 += meme2;
            std::reverse(meme2.begin(), meme2.end());
        }
        /*
        string two31rev = "2147483648";
        std::reverse(two31rev.begin(), two31rev.end());
        if (meme.size() == 10) {
            for (int i = 9; i >= 0; i--)
                if (meme[i] > two31rev[i])
                    return 0;
                else if (meme[i] < two31rev[i])
                    break;
        }*/
        std::reverse(meme.begin(), meme.end());
        sol = stol(meme);
        if (neg) sol *= -1;
        return abs(sol) > pow(2, 31) ? 0 : sol;
    }
};