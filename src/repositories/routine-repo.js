const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CRUD

exports.addRoutine = async (pname, pdescription, puserId) => {
    try {
        const new_routine = await prisma.ROUTINE.create({
            data: {
                name: pname,
                description: pdescription,
                userId: puserId
            },
        });
        return new_routine;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findRoutineByName = async (pname) => {
    try {
        const query = await prisma.ROUTINE.findUnique({
            where: {
                name: pname,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.listRoutines = async () => {
    try {
        const query = await prisma.ROUTINE.findMany();
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.updateRoutine = async (pname, pdescription, puserId) => {
    try {
        const query = await prisma.ROUTINE.update({
            where: {
                name: pname,
            },
            data: {
                pdescription,
                puserId
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.deleteRoutine = async (pname) => {
    try {
        const query = await prisma.ROUTINE.delete({
            where: {
                name: pname,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}