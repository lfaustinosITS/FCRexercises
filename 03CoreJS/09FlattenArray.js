function flattenArrayRecursive(array){
    if (!array){
        return [];
    }
    
    const flattened = [];

    function flattenRecursive(arr){
        for (let i = 0;i<arr.length;i++){
            if (Array.isArray(arr[i])){
                flattenRecursive(arr[i]);
            }else{
                flattened.push(arr[i])
            }
        }
    }
    
    flattenRecursive(array);
    return flattened

}

function flattenArrayIterative(array){
    if (!array){
        return [];
    }
    const stack = [...array];
    const flattened = [];
    while (stack.length>0){
        const current = stack.pop();
        if (Array.isArray(current)){
            stack.push(...current);
        }else{
            flattened.unshift(current);
        }
    }
    return flattened
}

module.exports = {flattenArrayIterative,flattenArrayRecursive}