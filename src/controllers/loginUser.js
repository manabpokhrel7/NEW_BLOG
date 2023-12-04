const bcrypt = require('bcrypt');
const User = require('../database/models/User');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                req.session.userId = user._id;
                return res.redirect('/');
            }
        }

        res.redirect('/auth/login');
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.redirect('/auth/login');
    }
};
