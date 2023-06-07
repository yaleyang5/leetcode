class Solution {
public:
    bool isValid(string s) {
        unordered_map<char, int> charMap = {
            {'(', -1},
            {'{', -2},
            {'[', -3},
            {')', 1},
            {'}', 2},
            {']', 3}
        };
        
        stack<int> stk;
        
        for (char c : s) {
            
            int n = charMap[c];
            
            if (stk.size() > 0) {
                
                if (n == -1 * stk.top())
                    stk.pop();
                else if (n < 0)
                    stk.push(n);
                else
                    return false;
                
            }
            else {
                
                if (n > 0)
                    return false;
                
                stk.push(n);
                
            }
            
        }
        
        return stk.size() == 0;
    }
};