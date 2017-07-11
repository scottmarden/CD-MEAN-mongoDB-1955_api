const controller = require('./../controllers/controller.js')

module.exports = app => {
	app.get('/', controller.index) //serve up full collection of people born in 1955
	app.get('/new/:name', controller.add_name) //adds ':name' to database
	app.get('/remove/:name', controller.remove_name) //removes ':name' from database
	app.get('/:name', controller.show_name) //serve up document of ':name'
}
