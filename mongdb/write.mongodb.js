use('crudDb')
db.course.insertOne({
    'name':'python',
    'price':100,
    'time':'6month'
})
db.course.insertMany(
    [
        { 'name': 'mongodb', 'price': 120, 'time': '6 months' },
        { 'name': 'mongodb', 'price': 150, 'time': '8 months' },
        { 'name': 'mongodb', 'price': 90, 'time': '5 months' },
        { 'name': 'mongodb', 'price': 110, 'time': '7 months' },
        { 'name': 'mongodb', 'price': 130, 'time': '6 months' },
        { 'name': 'mongodb', 'price': 140, 'time': '9 months' },
        { 'name': 'mongodb', 'price': 95, 'time': '4 months' },
        { 'name': 'mongodb', 'price': 160, 'time': '10 months' },
        { 'name': 'mongodb', 'price': 125, 'time': '6 months' },
        { 'name': 'mongodb', 'price': 105, 'time': '5 months' }
    ]
)