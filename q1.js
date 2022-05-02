
// Q). Find whether an array is subset of another array.
// Input: arr1 = [1, 2, 3, 4, 5, 6], arr2 = [1, 2, 4] 
// Output: arr2 is a subset of arr1

// Input: arr1 = [10, 5, 2, 23, 19], arr2 = [19, 5, 3] 
// Output: arr2 is not a subset of arr1 




function isSubset(a, b, m, n) {
 
    
    let mp = new Map();
 
    for (let i = 0; i < m; i++) {
         if (mp.has(a[i])) {
            mp.set( mp.get(a[i]) + 1)
        } else {
            mp.set(a[i])
        }
    }
 

    let f = 0;
 
    for (let i = 0; i < n; i++) {
       
        if (!mp.has(b[i])) {
            f = 1;
            break;
        }
 
       
        else {
            mp.set( mp.get(b[i]) - 1);
 
            if (mp.get(b[i]) == 0)
                mp.delete(b[i]);
        }
    }
 
    return f;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];
 
let m = arr1.length;
let n = arr2.length;
 
if (!isSubset(arr1, arr2, m, n))
    document.write("arr2[] is subset of arr1[] ");
else
    document.write("arr2[] is not a subset of arr1[]");