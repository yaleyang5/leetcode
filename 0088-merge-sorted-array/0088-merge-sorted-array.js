/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr1 = nums1.slice(0, m);
    var arr2 = nums2.slice(0, n);
    console.log(arr1, arr2);
    var j = 0, k = 0;
    for (var i = 0; i < m + n; i++) {
        nums1[i] = (arr1[j] < arr2[k] && j < m || arr2[k] === undefined) ? arr1[j++] : arr2[k++];
    }
    return nums1;
};