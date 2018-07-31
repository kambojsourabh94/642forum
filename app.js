const express = require('express')

const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')


app.get('/', (req, res)=> {

	 res.render('index')
})


app.post('/register', (req, res)=> {


console.log(req.body)
	 res.render('display', {
	 	firstname: req.body.first_name,
	 	lastname: req.body.last_name,
	 	email: req.body.email,
	 	phone: req.body.phone,
		income: req.body.income,
		address: req.body.Address,
		zip: req.body.zip,
		state: req.body.State
	 	 })

console.log(req.body)
	res.render('terms', {
		terms:req.body.Terms})


})
app.listen(process.env.PORT || 3000, () => {
	  console.log('server running ')
})
