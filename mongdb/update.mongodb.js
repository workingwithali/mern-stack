use('crudDb')
// db.course.updateOne({price:0},{$set:{price:100}})
db.course.updateMany({price:100},{$set:{price:1000}})