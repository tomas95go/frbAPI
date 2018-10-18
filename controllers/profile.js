const handleProfileGet = (req, res, db) => {

	const { id } = req.params;
	db.select('*')
	.from('users')
	.where({
//Data in DB: parameter received.
		iduser: id

	})
	.then(user => {
		//How to check against an empty array in JS
		if (user.length){

			res.json(user[0]);

		} else {

			res.status(400).json('Not Found dude')

		}

	}).catch(err => res.status(400).json('error getting user'))

}

module.exports = {

	handleProfileGet: handleProfileGet

}