const router = require("express").Router();
const { User } = require('../models/User');


//router.get homepage
//router.post homepage

//router.get login
//router.post login

//router.post logout 




//don't need signup, in handlebars
// router.post('/signup', async (req, res) => {
//     try {
//     const newUser = await User.create(req.body);

//     req.session.save(() => {
//         req.session.user_id = newUser.id;
//         req.session.logged_in = true;

//         res.status(200).json(newUser);
//     });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.post("/sign-up", async (req, res)=> {
//     //destructing
//     const{username, password} = req.body;
//     if(!username || !password) {
//         res.status(400).send("username and password are required");
//         return;
//     }
//     try {
//         const newUser = await User.create(req.body);
//         console.log(newUser);
//         if(!newUser) {
//             res.status(400).send("failed to create new user");
//             return;
//         }
//         res.status(200).json({newUser});
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("internal server error");
//     }
// });


module.exports = router;