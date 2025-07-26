function operations(n,m){
    let add = n + m;
    let diff = n - m;
    let prod = n * m;
    let div = n / m;
    
    return {
        a: add,
        b: diff,
        d: prod,
        y: div
    };
}
 
console.log(operations(10, 5))
 