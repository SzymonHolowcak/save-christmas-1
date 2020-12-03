
function max(arr) { 
    let maxNum = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }   
    }
        
    return maxNum
}

function min(arr) {
    let minNum = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }   
    }
        
    return minNum
}

function mean(arr) {
    
}
console.log(max([2,9,7,20,8,100,3]))
console.log(min([2,9,7,20,8,100,3]))