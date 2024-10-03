// array
// forEach map filter indexof find
var arr = [2,3,4,5]

var arr = [2, 3, 4, 5];
arr.forEach((item) => {
    console.log(item + " hello");
});

var newarr = arr.map((item)=>{
    return (item + 2)
})
console.log(newarr)