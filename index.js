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


//find the intersect of two arrays

function intersect(arr1, arr2) {
    let result = [];
    let hashTable = {};
    for (let i = 0; i < arr1.length; i++){
        hashTable[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++){
        if (hashTable[arr2[j]]) {
            result.push(arr2[j])
        }
    }
    return result;
}

console.log(intersect([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]))

//find a duplicate in the array
function duplicate(array) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]) {
                result.push(array[i])
            }
        }
    }
    return result;
}

console.log(duplicate(["a", "b", "c", "d", "c", "e", "a"]))

function duplicateHash(array) {
    let hashTable = {};
    for ( let i = 0; i < array.length; i++){
        if (hashTable[array[i]]) {
            return array[i]
        } else {
            hashTable[array[i]] = true;
        }
    }
    return false
}

console.log(duplicateHash(["a", "b", "c", "d", "c","e"]))

