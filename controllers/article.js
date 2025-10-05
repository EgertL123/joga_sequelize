const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = (req, res) => {
    Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json({ articles });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ error: err.message });
        })
}

const getArticleBySlug = (req, res) => {
    Article.findOne({
        where: {
            slug: req.params.slug
        }
    })
    .then(article => {
        console.log(article);
        return res.status(200).json({ article });
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
}