const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

const models = require('../models');

const getArticlesByAuthor = async (req, res) => {
    try {
        const authorId = parseInt(req.params.id, 10);
        if (Number.isNaN(authorId)) {
            return res.status(400).json({ error: 'Invalid authorId' });
        }

        // Find the author first using findByPk
        const author = await models.Authors.findByPk(authorId);
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }

        // Then fetch related articles (either via association or direct where)
        const articles = await models.Article.findAll({
            where: { author_id: author.id },
            order: [['published', 'DESC']],
        });

        return res.json(articles);
    } catch (err) {
        console.error('getArticlesByAuthor error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getArticlesByAuthor,
};
