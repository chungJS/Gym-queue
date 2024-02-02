const userRepo = require('../repositories/user-repo');
const validation = require('../validation/joi-validation');

exports.userRegister = async (req, res) => {
    try{
        const { email, password, name } = await validation.register.validateAsync(req.body);
        const new_user = await userRepo.addUser(email, password, name);
        res.json(new_user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.userLogin = async (req, res) => {
    try{
        const { email,password } = await validation.login.validateAsync(req.body);
        const user = await userRepo.findUserByEmail(email);
        if (user.password == password) {
            res.json(user);
        }
        else {
            res.status(500).json({ error: 'Wrong password' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}