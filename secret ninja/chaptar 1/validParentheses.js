// valid-parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
function isValid(s) {
  const stack = [];
  const bracketMap = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char in bracketMap) {
      const top = stack.pop();
      if (top !== bracketMap[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
