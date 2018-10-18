const Clarifai =  require('clarifai');

const app = new Clarifai.App({

 apiKey: '8c0cde6aa41f47d28ac6ed7ed8b13933'

});

 const handleApiCall = (req, res) => {

 	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
 	.then(data => {

 		res.json(data);

 	}).catch(err => res.status(400).json('unable to work with API'))
 }

 


const handleImage = (req, res, db) => {

	const { id } = req.body;
	db('users')
	.where('iduser', '=', id)
	.increment('entries',1)
	.returning('entries')
	.then(entries => {

		res.json(entries[0]);

	}).catch(err => res.status(400).json('unable to get entries'))


}

module.exports = {

	handleImage: handleImage,
	handleApiCall

}