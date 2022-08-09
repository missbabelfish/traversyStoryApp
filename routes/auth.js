const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Authenticate with Google
// @route  GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth Callback
// @route GET /auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/'}),
    (req, res) => {
        res.redirect('/dashboard')
    })

// @desc    Logout user
// @route   /auth/logout
/* LOGOUT ROUTE NOT WORKING - Error: req#logout requires a callback function
    at req.logout.req.logOut (C:\Users\mixol\Desktop\100Devs\Homework\traversyStoryApp\node_modules\passport\lib\http\request.js:65:44)
    at C:\Users\mixol\Desktop\100Devs\Homework\traversyStoryApp\routes\auth.js:21:9 */
router.get('/logout', (req, res, next) => {
    req.logout( (err) => { if (err) return next(err)} )
    res.redirect('/')
})

module.exports = router