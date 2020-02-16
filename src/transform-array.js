module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) {
        throw new Error()
    }

    index = 0

    arr.forEach( function(item, index) {
        if ( item == '--discard-next' && !(index == arr.length -1)) {
            arr.splice(index, 2)  
        } else if ( item == '--discard-prev' && !(index == 0) ) {
            arr.splice(index - 1, 2)  
        } else if ( item == '--double-next' && !(index == arr.length -1)) {
            arr.splice(index, 1, arr[index + 1]) 
        } else if ( item == '--double-prev' && !(index == 0)) {
            arr.splice(index, 1, arr[index - 1]) 
        } else {
            return
        } 
    })
    return arr
};
