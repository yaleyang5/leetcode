/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* less(ListNode* one, ListNode* two) {
        if(one == nullptr) return two;
        else if(two == nullptr) return one;
        else if(one->val <= two->val) return one;
        else return two;
    }
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* temp1 = list1, *temp2 = list2, *temp3 = list1;
        if(list1 == nullptr && list2 == nullptr) return list1;
        if(list1 == nullptr && list2 != nullptr) return list2;
        if(list2 == nullptr && list1 != nullptr) return list1;
        if(list2->val < list1->val) {
            temp3 = list2;
        }
        while(temp1 != nullptr && temp2 != nullptr) {
            if(temp1 == less(temp1,temp2)) {
                temp1 = temp1->next;
                list1->next = less(temp1,temp2);
                list1 = temp1;
            } else {
                temp2 = temp2->next;
                list2->next = less(temp1,temp2);
                list2 = temp2;
            }
        }
        return temp3;
    }
};