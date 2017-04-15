module.exports = app => {
	var Tasks = app.db.models.Tasks

	var TaskController = {
		all: (req, res, next) => {
			delete req.body.id
			next()
		},

		findAll: (req, res) => {
			Tasks.findAll({}).then(tasks => {
				res.status(200).json({tasks: tasks})
			}).catch(error => {
				res.status(401).json({msg: error.message})
			})
		}, 

		get: (req, res) => {
			Tasks.findOne({where: req.params})
				.then(task => {
					res.status(200).json(task)
				})
				.catch(error => {
					res.status(401).json({msg: error.message})

				})
		},	

		create: (req, res) => {
			console.log(req.body)
			Tasks.create(req.body).then(task => {
				if (task) {

					res.status(200).json({task: task})
				}else{
					res.sendStatus(404)

				}
			}).catch(error => {
				res.status(401).json({msg: error.message})	
			})
		}, 

		update: (req, res) => {	
			console.log(req.body)
			Tasks.update(req.body, {where: req.params})
				.then(task => res.sendStatus(200))
				.catch(error => res.status(401).json({msg: error.message}))
		},

		destroy: (req, res) => {
			Tasks.destroy({where: req.params})
				.then(task => res.sendStatus(200))
				.catch(error => res.status(401).json({msg: error.message}))
		}
	}

	return TaskController
}