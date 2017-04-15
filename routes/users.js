module.exports = app => {
	const Users = app.controllers.users

	app.get("/users/:id", Users.findById)
	app.post("/users", Users.create)
	app.delete("/users/:id", Users.destroy)
}