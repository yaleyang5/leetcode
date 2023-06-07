class Solution:
    def isValid(self, s: str) -> bool:
        charMap = {
            '(' : -1,
            '{' : -2,
            '[' : -3,
            ')' : 1,
            '}' : 2,
            ']' : 3
        }
        
        stack = []
        
        for i in range(0, len(s)):
            c = charMap.get(s[i])
            
            if len(stack) > 0:
                top = stack.pop()

                if c == -1 * top:
                    continue
                elif c < 0:
                    stack.append(top)
                    stack.append(c)
                else:
                    return False
            else:
                if c > 0:
                    return False

                stack.append(c)
        
        return len(stack) == 0