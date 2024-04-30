1. It will print out 2. The for loop will run 3 times but since we start at 0 it will only increment to 2. The console log variable will print it out since var was declared.
2. 150 will be printed out on the console because the var, discountedPrice, will store and print out its last saved value. In this case 300 * .5 or 150.
3. 150 will still be printed out. Like discountedPrice we will store the value of finalPrice after its last for-loop iteration and after its calculations, it will remain the same.
4. [50,100,150] returning discounted will return the array that is storing all the calculated prices.
5. An error will be returned let i is only in the scope of the for loop block and outside the loop it is inaccessible. This means that let i cannot be accessed in the console command.
6. An error will be returned just like i. The same issue occurs when it is inside the for loop.
7. 150 will be logged. Since let finalPrice is declared before the loop it will be accessible inside and outside of the loop.
8. [50,100,150] returning discounted will return the array that is storing all the calculated prices. Since let discounted is outside of any loop and in the same block as our return it is a valid use.
9. An error will be returned let i is only in the scope of the for loop block and outside the loop it is inaccessible. This means that let i cannot be accessed in the console command.
10. 3 will be logged the const that is determined at the beginning will be logged. It never changes and stays the same.
11. [50, 100, 150] returning discounted will return the array that is storing all the calculated prices. Although it is a const it means that the reference to the array cannot change so by using the push functionality it will work and create the intended effect.
12. a) student.name; b) student['Grad Year']; c) student.greeting(); d) student['Favorite Teacher'].name; e) student.courseLoad[0];
13. a) '32' b) 1 c) 3 d) '3null' e) 4 f) 0 g) '3undefined' h) NaN
14. a) true b) false c) true d) false e) false f) true
15. Both are comparisos but === looks at the two without any type conversions while == changes the types.
17. [2,4,6] will be returned. We are given the array [1,2,3] and the for loop will eventually iterate through this entire array. callback refers to the function doSomething, which multiplies the input by 2. The for-loop uses this function and pushes the result onto newArr. 1 will be multiplied and pushed, same with 2 and 3 giving us our output array, newArr.
19. 1 4 3 2 is the order that the numbers will be logged out. 
