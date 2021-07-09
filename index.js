//find the array subset in the two arrays

function subSet(arr1, arr2) {
    let smallArray;
    let largeArray;
    if (arr1.length > arr2.length) {
        smallArray = arr2;
        largeArray = arr1
    } else {
        smallArray = arr1;
        largeArray = arr2;
    }

    for (let i = 0; i < smallArray.length; i++){
        let foundMatch = false;
        for (let j = 0; j < largeArray.length; j++){
            if (smallArray[i] == largeArray[j]) {
                foundMatch = true;
                break;
            }
        }
        if (foundMatch == false) {
            return false;
        }
    }
    return true;
}

console.log(subSet(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"]))
//has O(N*M)

//using hashtables

function subHash(arr1, arr2) {
    let smallArray;
    let largeArray;
    let hashTable = {};
    if (arr1.length > arr2.length) {
        smallArray = arr2;
        largeArray = arr1
    } else {
        smallArray = arr1;
        largeArray = arr2;
    }

    for (let i = 0; i < largeArray.length; i++){
        hashTable[i] = true;
    }

    for (let j = 0; j < smallArray.length; j++){
        if (!hashTable[j]) {
            return false;
        }
    }
    return true;
}

console.log(subHash(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"]))
//O(N)