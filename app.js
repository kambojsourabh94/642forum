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

	  console.log(req.body.firstname)
})
app.listen(3000 || process.env.PORT, () => {
	  console.log('server running ')
})