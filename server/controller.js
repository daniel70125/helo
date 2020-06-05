const bcrypt = require('bcrypt');


module.exports = {
    register: async (req, res) => {
        const {username, password, profile_pic} = req.body;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        if (user[0]){
            res.status(409).send("User already created")
        }

        let salt = bcrypt.genSaltSync(1);
        let hash = bcrypt.hashSync(password, salt);

        let newUser = await db.new_user([username, hash, profile_pic]);

        req.session.user = newUser[0];

        res.status(200).send(req.session.user);
    }
}