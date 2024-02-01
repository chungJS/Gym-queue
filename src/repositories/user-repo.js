const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CRUD

exports.addUser = async (pemail,ppassword,pname) => {
    try {
        const new_user = await prisma.USER.create({
            data: {
                email: pemail,
                password: ppassword,
                name: pname
            },
        });
        return new_user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.findUserByEmail = async (pemail) => {
    try {
        const query = await prisma.USER.findUnique({
            where: {
                email: pemail,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.updateUser = async (pemail,ppassword,pname) => {
    try {
        const query = await prisma.USER.update({
            where: {
                email: pemail,
            },
            data: {
                password: ppassword,
                name: pname
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.deleteUser = async (pemail) => {
    try {
        const query = await prisma.USER.delete({
            where: {
                email: pemail,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}