// Runtime: 102 ms, faster than 96.28% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 46.9 MB, less than 84.90% of JavaScript online submissions for Add Two Numbers.

var addTwoNumbers = function(l1, l2) {
    let retRoot = new ListNode(0);
    let cur = retRoot;
    let carryOver = false;
    let sum = 0;
    
    while(l1 || l2) {
        let retChild = new ListNode();
        if(l1) {
            if(l2) {
                sum = l1.val + l2.val;
                l2 = l2.next;
            } else {
                sum = l1.val
            }
            l1 = l1.next;
        }
        else {
            sum = l2.val;
            l2 = l2.next;
        }
        if(carryOver) {
            sum += 1;
            carryOver = false;
        }
        if(sum > 9) {
            carryOver = true;
            retChild.val += (sum - 10);
        } else {
            retChild.val += sum;
        }
        cur.next = retChild;
        cur = cur.next;
    }
    if(carryOver) cur.next = new ListNode(1);
    return retRoot.next;
};