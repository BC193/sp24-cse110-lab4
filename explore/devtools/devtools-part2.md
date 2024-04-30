1. The bug was in the data types of the variables num1 and num2. Since we treated them as strings when you add them in the function it becomes a concatenated string instead.
2. I would add parseFloat(num1) + parseFloat(num2) instead of num1+num2. This ensures we are working with numbers. 
