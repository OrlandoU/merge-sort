let unsortedArray = [5, 18, 15, 19, 11, 2, 9, 14, 3, 17, 7, 12, 16, 13, 8, 1, 10, 6, 20, 4]

let sortedArray = mergeSort(unsortedArray)

function mergeSort(arr){
    if(arr.length < 2) return arr

    //Sort Left and Right Side, and Empty Merged Array
    let arrLeft = mergeSort(arr.slice(0, arr.length / 2))
    let arrRight = mergeSort(arr.slice(arr.length  / 2))
    let mergedArr = []
    
   //Merging Elements 
    while(arrLeft.length || arrRight.length){
        if(arrLeft.length && arrRight.length){
            mergedArr.push(arrLeft[0] < arrRight[0] ? arrLeft.shift(): arrRight.shift())
        }else if (!arrLeft.length){
            mergedArr.push(arrRight.shift())
        }else {
            mergedArr.push(arrLeft.shift())
        }
    }
    return mergedArr
}
console.log(sortedArray)