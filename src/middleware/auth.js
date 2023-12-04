const User = require('../database/models/User');

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.redirect('/');
        }

        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.redirect('/');
    }
};
