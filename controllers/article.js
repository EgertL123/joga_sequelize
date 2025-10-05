const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

const models = require('../models');

const getAllArticles = (req, res) => {
    models.Article.findAll()
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
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [{
            model: models.Authors
        }],
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