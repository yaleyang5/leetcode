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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* solution = new ListNode;
        ListNode* move1 = l1;
        ListNode* move2 = l2;
        ListNode* move3 = solution;
        
        for (int carry = 0; move1 != nullptr || move2 != nullptr || carry == 1;) {
            int val1 = 0, val2 = 0;
            if(move1 != nullptr) val1 = move1->val;
            if(move2 != nullptr) val2 = move2->val;
            move3->val = (val1 + val2 + carry)%10;
            if ((val1 + val2 + carry) > 9)
                carry = 1;
            else 
                carry = 0;
            if(move1 != nullptr) move1 = move1->next;
            if(move2 != nullptr) move2 = move2->next;
            if (move1 != nullptr || move2 != nullptr || carry == 1) move3->next = new ListNode;
            if (move1 != nullptr || move2 != nullptr || carry == 1) move3 = move3->next;
        }
        
        return solution;   
    }
    
};