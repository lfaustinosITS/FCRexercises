function totalSum(array){
    let total = 0;
    for (let i =0;i<array.length;i++){
        if (typeof(array[i])!== "number"){
            throw new Error('This is not a valid array')
        }
        total+=array[i]
    }
    return total
}

function balanceSum(array){
    let rest = totalSum(array);
    let sum = 0
    for (let i =0;i<array.length;i++){
        sum+=array[i];
        rest-=array[i];
        if (sum === rest){
            return i
        }

    }
    return -1
}

module.exports = balanceSum;

