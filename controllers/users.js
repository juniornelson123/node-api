module.exports = app => {
	const Users = app.db.models.Users

	var UsersController = {
		findById: (req, res) => {
			Users.findById(req.params.id, {
				attributes: ["id", "name", "email"]
			})
			.then(users => res.status(200).json(users))
			.catch(error => res.status(401).json({msg: error.message}))
		},	

		destroy: (req, res) => {
			console.log({where: req.params})
			Users.destroy({where: req.params})
			.then(user => res.sendStatus(204))
			.catch(error => res.status(401).json({msg: error.message}))
		},

		create: (req, res) => {
			Users.create(req.body)
				.then(user => res.status(200).json(user))
				.catch(error => res.status(401).json(error))
		}
	}

	return UsersController
}