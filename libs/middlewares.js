import bodyParser from 'body-parser'
module.exports = app => {

	app.set("json spaces", 4)
	app.set("port", 3000)
	app.use(bodyParser.json())
	app.use(app.auth.initialize())
	app.use(bodyParser.urlencoded({ extended: false }))
}