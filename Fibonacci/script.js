function fibs(n){
    let arr = [ 0, 1 ]
    for(let i = 2; i < n;i++){
        arr[i] = arr[i - 1]+ arr[i - 2]
    }
    return arr
}

function fibsRec(n){
   if(n === 0) return 'INVALID NUM'
   if (n == 1) return [0]
   else if (n == 2) return [0, 1]

   let lastFib = fibsRec(n - 1);
   return lastFib.concat(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2])
}

console.log(fibsRec(8))