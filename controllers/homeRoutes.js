const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

//Get all blogs and JOIN with user data
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    //Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    //Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//withAuth middleware to prevent acccess to their profile unless they are logged in.
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  //if the user is already logged in, redirect the request to their profile route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('signup');
});

module.exports = router;
