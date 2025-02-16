use('crudDb')
db.createCollection('course')
db.course.insertOne({
    'name':'js',
    'price':0,
    'time':'3month'
})