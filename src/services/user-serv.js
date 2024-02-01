const repo = require('../repositories/user-repo');

exports.userRegister = async (req, res) => {
    const { email, password, name } = req.body;
    const new_user = await repo.addUser(email, password, name);
    res.json(new_user);
}

exports.userLogin = async (req, res) => {
    const { email,password } = req.body;
    const user = await repo.findUserByEmail(email);
    if (user.password == password) {
        res.json(user);
    }
    else {
        res.status(500).json({ error: 'Wrong password' });
    }
}