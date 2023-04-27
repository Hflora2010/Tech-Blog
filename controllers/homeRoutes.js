const router = require('express').Router();
const { User, blogPost } = require('../models');
const withAuth = require('../utils/auth');

//Get all blogs and JOIN with user data
router.get("/", async (req, res) => {
    try {
        const blogPostData = await User.findAll({
            include: [
                {
                    model: User,
                    attributes: [''],
                },
            ],
        });
    }
});