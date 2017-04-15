module.exports = app => {
	console.log(app.controllers)
	var Session = app.controllers.session
	
	app.post("/signin", Session.login)
}