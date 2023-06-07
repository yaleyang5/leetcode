class Solution {
public:
    int maxArea(vector<int>& height) {
        int area = 0;
        
        for (int i = 0, j = height.size() - 1; 
             i < j; 
             height[i] < height[j] ? i++ : j--) 
        {
            int newarea = (j - i) * min(height[i], height[j]);
            if (newarea > area) 
            {
                area = newarea;
            }
        }
        
        return area;
    }
};