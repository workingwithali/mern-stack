var obj = {
    name :"ali rashid",
    age:25
}
obj.age = 34
Object.freeze(obj)
obj.age = 36

console.log(obj)
console.log(obj.age)
console.log(obj['name'])