const repo = require('../repositories/user-repo');

exports.userRegister = async (req, res) => {
    const { email, password, name } = req.body;
    const new_user = await repo.addUser(email, password, name);
    if (new_user.error == 0) {
        res.json(new_user);
    }
    else {
        res.status(500).json({ error: 'Failed to create user' });
    }
}

exports.userLogin = async (req, res) => {
    const { email,password } = req.body;
    const user = await repo.findUserByEmail(email);
    if (user.error == 0) {
        if (user.password == password) {
            res.json(user);
        }
        else {
            res.status(500).json({ error: 'Wrong password' });
        }
    }
    else {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
}