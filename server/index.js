require('dotenv').config();
let express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller')

const {PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    })
)

app.post('/api/auth/register', ctrl.register)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
}).then(db => {
    app.set('db', db)
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
})

// app.listen(PORT, () => console.log(`Running on port ${PORT}`));