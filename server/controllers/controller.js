const mongoose = require('mongoose');

const Person = mongoose.model('Person')

// app.get('/', controller.index) //serve up full collection of people born in 1955
// app.get('/new/:name', controller.add_name) //adds ':name' to database
// app.get('/remove/:name', controller.remove_name) //removes ':name' from database
// app.get('/:name', controller.show_name) //serve up document of ':name'

module.exports = {
	index: (req, res) => {
		Person.find({}, (err, data) => {
			if(err){
				res.json(err);
				return;
			}else{
				res.json(data)
			}
		})
	},

	add_name: (req, res) => {
		let person = new Person()
		person.name = req.params.name;
		person.save( (err, savedPerson) =>{
			if(err){
				console.log(err.errors);
			}else{
				res.redirect('/');
			}
		})
	},

	remove_name: (req, res) => {
		console.log(req.params.name)
		Person.remove({name: req.params.name}, (err, data) => {
			if(err){
				console.log(err.errors);
			}else{
				res.redirect('/')
			}
		})
	},

	show_name: (req, res) => {
		Person.findOne({name: req.params.name}, (err, data) =>{
			if(err){
				console.log(err.errorss);
			}else{
				res.json(data);
			}
		})
	}

}
