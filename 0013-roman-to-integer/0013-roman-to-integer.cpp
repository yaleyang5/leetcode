class Solution {
public:
    int romanToInt(string s) {
        std::unordered_map<char, int> symbolmap({
            {'I', 1}, 
            {'V', 5}, 
            {'X', 10}, 
            {'L', 50}, 
            {'C', 100}, 
            {'D', 500}, 
            {'M', 1000}});
        
        std::unordered_map<string, int> pairmap({
            {"IV", 4},
            {"IX", 9},
            {"XL", 40},
            {"XC", 90},
            {"CD", 400},
            {"CM", 900}});
        
        int ans = 0;
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == 'I' ||
                s[i] == 'X' ||
                s[i] == 'C')
            {
                if (i + 1 < s.size() && pairmap.find(s.substr(i, 2)) != pairmap.end())
                {
                    ans += pairmap[s.substr(i, 2)];
                    i++;
                    continue;
                }
            }
            
            ans += symbolmap[s[i]];
        }
        
        return ans;
    }
};