function reverse(array){ // Receive an array
    let left = 0; // Declare the left variable
    let right = array.length - 1; // Declare the right variable, which is the last item in the array

    while(left < right){ // While the left variable value is less than the right variable value
        let temp = array[left]; // Create a temp variable that stores the value of the array at the left position
        array[left] = array[right]; // Change the value of the array at the left position to the value at the right position
        array[right] = temp; // Change the value of the array at the right position to the value stored in the temp variable

        left++; // Increment left
        right--; // Decrement right
    } // This while loop will return to the start and revalidate if the left is still less than right

    return array; // When the while loop ends, the function will return the reversed array
}

console.log(reverse([1,2,3,4,5]));