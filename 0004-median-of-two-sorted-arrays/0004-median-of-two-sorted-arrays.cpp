class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int len = nums1.size() + nums2.size();
        bool even = (len % 2 == 0);
        len = !even ? (len+1)/2 : (len/2)+1;
        double num = 0, num2 = 0;
        int i,j;
        for (i = 0, j = 0; i+j < len; )
        {
            num2 = num;
            if (j >= nums2.size() || (i < nums1.size() && nums1[i] < nums2[j]))
            {
                num = nums1[i];
                i++;
            }
            else
            {
                num = nums2[j];
                j++;
            }
        }
        return !even ? num : (num + num2) / 2;
    }
};