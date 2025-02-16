use('crudDb')
db.course.updateOne({price:0},{$set:{price:100}})