let result = [1,2,3,4,5]
    .filter(x => x%2==0)
    .map(x => x*2)
    .reduce((x,y) => x+y);

console.log(result);

