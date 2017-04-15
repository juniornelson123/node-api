module.exports = {
	database: "ntask",
	username: "",
	password: "",
	params:{
		dialect: "sqlite",
		storage: "ntask.sqlite",
		define:{
			underscored: true
		}
	},
	jwtSecret: "Ntalk-API",
	jwtSession: {session: false}

}