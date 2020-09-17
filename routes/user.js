const express = require('express');
const router = express.Router();

//Middleware
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, read, update } = require('../controllers/user');

//routes
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});


router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.param('userId', userById);

module.exports = router;