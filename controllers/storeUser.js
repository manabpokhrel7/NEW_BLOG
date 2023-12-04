const User = require('../database/models/User');

module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.redirect('/');
    } catch (error) {
        res.redirect('/auth/register');
    }
};
