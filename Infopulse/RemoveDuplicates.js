function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;

      // Check if the current element is already in uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }

      // If it's not a duplicate, add it to uniqueArray
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }

    return uniqueArray;
  }

  // Example usage
  const array = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(array);
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
///////////////////////////////////////////////////////////////////////////////////////
// let initialArray = [1, 2, 3, 4, 5];

// function getReverseArray(array) {

//   let arrayReverse = [];

//   for (let i = array.length - 1; i >= 0; i--) {

//     arrayReverse.push(array[i]);
//   }

//   return arrayReverse;

// }

// console.log(getReverseArray(initialArray));