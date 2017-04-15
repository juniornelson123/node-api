module.exports = app => {
	const Task = app.controllers.tasks

	app.route("/tasks")
		.all(Task.all, app.auth.authenticate())
		.get(Task.findAll)
		.post(Task.create)

	app.route("/tasks/:id")
		.all(Task.all, app.auth.authenticate())
		.get(Task.get)
		.put(Task.update)
		.delete(Task.destroy)	
}