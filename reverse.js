function reverse(array){ // Receive an array
    
    if(!Array.isArray(array)){ // Verify if the requested parameter is an actual array
        return 'Not array!';
    }

    let newArray = [...array]; // Use the spread operator to copy all the array values into another array so that the function doesn’t modify the original array.

    let left = 0; // Declare the left variable
    let right = newArray.length - 1; // Declare the right variable, which is the last item in the array

    while(left < right){ // While the left variable value is less than the right variable value
        let temp = newArray[left]; // Create a temp variable that stores the value of the array at the left position
        newArray[left] = newArray[right]; // Change the value of the array at the left position to the value at the right position
        newArray[right] = temp; // Change the value of the array at the right position to the value stored in the temp variable

        left++; // Increment left
        right--; // Decrement right
    } // This while loop will return to the start and revalidate if the left is still less than right

    return newArray; // When the while loop ends, the function will return the reversed array
}

console.log(reverse(["b","o","l","o"]))

module.exports = reverse;