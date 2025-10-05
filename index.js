const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection to database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

const articleRouter = require('./routers/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})