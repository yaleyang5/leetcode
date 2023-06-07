class Solution {
public:
    int compare(string a, string b) {
        int smaller = 0, amount = 0;
        if (a.size() > b.size()) smaller = b.size();
        else smaller = a.size();
        for (int i = 0; i < smaller; i++) {
            if (a[i] == b[i]) amount++;
            else break;
        }
        return amount;
    }
    string longestCommonPrefix(vector<string>& strs) {
        if(strs.size() == 1) return strs[0];
        string solution = "";
        int comparison = 0, current_lowest = 0;
        for (int i = 0; i < strs.size() - 1; i++) {
            comparison = compare(strs[i], strs[i+1]);
            if (i == 0) current_lowest = comparison;
            if (comparison < current_lowest) current_lowest = comparison;
        }
        
        for (int j = 0; j < current_lowest; j++) {
            solution.push_back(strs[0][j]);
        }
        return solution;
    }
};