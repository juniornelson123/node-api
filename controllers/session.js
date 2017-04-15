import jwt from "jwt-simple"

module.exports = app => {
	const cfg = app.libs.config
	const Users = app.db.models.Users

	var SessionController = {
		login: (req, res) => {
			if (req.body.email && req.body.password) {
				const email = req.body.email
				const password = req.body.password
				Users.findOne({where: {email: email}})
					.then(user => {
						if (Users.isPassword(user.password, password)) {
							const payload = {id: user.id}
							Users.update({token: jwt.encode(payload, cfg.jwtSecret)}, {where: payload})
								.then(result => {
									user.token = jwt.encode(payload, cfg.jwtSecret)
									res.status(200).json(user)

								})
								.catch(error => {
									res.sendStatus(401)

								})
						} else {
							res.sendStatus(401)
						}
					})
					.catch(error => res.sendStatus(401))
			}else{
				res.sendStatus(401)
			}
		}
	}

	return SessionController
}