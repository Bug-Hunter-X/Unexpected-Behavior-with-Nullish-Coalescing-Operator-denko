# Unexpected Behavior with Nullish Coalescing Operator in JavaScript

This repository demonstrates a common error in JavaScript related to null checks and the unexpected behavior when using the nullish coalescing operator (`??`) with nullish values (null or undefined).

## Bug Description
The `foo` function is intended to perform some operation only when both arguments (`a` and `b`) are not null. However, a simple `=== null` check is insufficient.  The function may still fail if one or both arguments are undefined rather than null, or if the function is called without explicitly passing in any arguments at all.

## Solution
Instead of comparing only to `null`, we should use a stricter check using the `typeof` operator or `Optional Chaining` to handle cases where arguments are undefined or null.