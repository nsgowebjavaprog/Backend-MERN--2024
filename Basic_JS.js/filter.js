var arr = [1,2,3,4,5,6,7,8,9,10];

var ans = arr.filter(function(val){
    if(val >5){
        return true;
    }
    else return false;
});
console.log(ans);

// [ 6, 7, 8, 9, 10 ]