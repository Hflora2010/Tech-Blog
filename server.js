const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const dotenv = require("dotenv");
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

dotenv.config();
console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 3001;

//set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});


const sess = {
    secret: 'super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
    };

app.use(session(sess));
app.use(express.json());

//Inform Express.js on which template engine to use 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// console.log(sequelize.authenticate().then((result) => result ? result:null));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});