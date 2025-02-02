# JavaScript Null Handling Bug

This repository demonstrates a subtle bug related to the handling of null values in a simple JavaScript function.

## Bug Description

The `foo` function takes two numbers as input and adds them. However, it attempts to handle null values by returning 0 if either input is null.  While functionally correct, this could lead to unexpected behavior if the caller does not anticipate this specific null handling.

## Solution

The solution involves improving error handling by throwing an error when null values are encountered, providing more informative feedback.