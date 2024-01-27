const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let userInfo = 
{
        id: 0,
        email: '',
        password: '',
        name: '',
        error: 0,
        error_msg: ''
};

//CRUD

exprorts.addUser = async (uemail,upassword,uname) => {
    try {
        const new_user = await prisma.USER.create({
            data: {
                uemail,
                upassword,
                uname
            },
        });
        userInfo.id = new_user.id;
        userInfo.email = new_user.email;
        userInfo.password = new_user.password;
        userInfo.name = new_user.name;
        userInfo.error = 0;
        return userInfo;
    } catch (error) {
        userInfo.error = 1;
        userInfo.error_msg = error;
        return userInfo;
    }
};

exports.findUserByEmail = async (uemail) => {
    try {
        const query = await prisma.USER.findUnique({
            where: {
                email: uemail,
            },
        });
        userInfo.id = query.id;
        userInfo.email = query.email;
        userInfo.password = query.password;
        userInfo.name = query.name;
        userInfo.error = 0;
        return userInfo;
    } catch (error) {
        userInfo.error = 1;
        userInfo.error_msg = error;
        return userInfo;
    }
};

exports.updateUser = async (uemail,upassword,uname) => {
    try {
        const query = await prisma.USER.update({
            where: {
                email: uemail,
            },
            data: {
                password: upassword,
                name: uname
            },
        });
        userInfo.id = query.id;
        userInfo.email = query.email;
        userInfo.password = query.password;
        userInfo.name = query.name;
        userInfo.error = 0;
        return userInfo;
    } catch (error) {
        userInfo.error = 1;
        userInfo.error_msg = error;
        return userInfo;
    }
}

exports.deleteUser = async (uemail) => {
    try {
        const query = await prisma.USER.delete({
            where: {
                email: uemail,
            },
        });
        userInfo.id = query.id;
        userInfo.email = query.email;
        userInfo.password = query.password;
        userInfo.name = query.name;
        userInfo.error = 0;
        return userInfo;
    } catch (error) {
        userInfo.error = 1;
        userInfo.error_msg = error;
        return userInfo;
    }
}