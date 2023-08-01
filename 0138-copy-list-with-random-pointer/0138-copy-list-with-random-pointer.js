/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        var n = new Node(head.val, null, null);
        if (head.random === null) {
            return n;
        } else {
            n.random = n;
            return n;
        }
    }
    var newHead = new Node(head.val, null, head.random);
    var temp1 = head.next;
    var temp2 = newHead;
    var indexes = new WeakMap();
    indexes.set(head, 0);
    var arr = [newHead];
    
    var i = 1;
    while (temp1 !== null) {
        var node = new Node(temp1.val, null, temp1.random);
        temp2.next = node;
        indexes.set(temp1, i);
        arr.push(node);
        
        
        temp1 = temp1.next;
        temp2 = temp2.next;
        i++;
    }
    temp2.next = null;
    // console.log(head, `\n\n\n`, newHead, `\n\n\n`, indexes.get(newHead.next), `\n\n\n`,  arr);
    
    for (var i = 0; i < arr.length; i++) {
        arr[i].random = arr[indexes.get(arr[i].random)];
    }
    
    return newHead;
};


// let's take a very long time with a lot of space.  
    
    // loop through the linked list, putting each node into a weak map with its "index" as its value
    // create the copied linked list as well, with node.random set to null. Put the new nodes into an array as well
    // O(n)
    
    // loop through the copied linked list, setting each random to the node with value of the index of the thing we want to point to
    // O(n)
