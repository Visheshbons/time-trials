import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

let name = 'User';
let email = 'user@gmail.com'
let ph = '1234567890'

app.get('/', (req, res) => {
    res.render(`index.ejs`, {
        user: name,
        email: email,
        ph: ph
    })
    console.log(`Page loaded!`)
})

app.post('/changeName', (req, res) => {
    name = req.body.name;
    res.redirect('/')
    console.log(`Name changed to ${chalk.grey(name)}`)
})

app.post('/changeEmail', (req, res) => {
    email = req.body.email;
    res.redirect('/')
    console.log(`Email changed to ${chalk.grey(email)}`)
})

app.post('/changePh', (req, res) => {
    ph = req.body.ph;
    res.redirect('/')
    console.log(`Phone # changed to ${chalk.grey(ph)}`)
})

app.listen(port, function(err){
    if (err) console.log(chalk.redBright.bgYellowBright(`FIRE IN THE HOLE!!!`))
    console.log(`Server running on port ${chalk.green(port)}`)
})

// This code is dedicated to Alexandra Lee.