const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CRUD

exports.addIsusing = async (pmachineId, puserId) => {
    try {
        const new_isusing = await prisma.IS_USING.create({
            data: {
                machineId: pmachineId,
                userId: puserId
            },
        });
        return new_isusing;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findIsusingByUser = async (puserId) => {
    try {
        const query = await prisma.IS_USING.findUnique({
            where: {
                userId: puserId,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findIsusingByMachine = async (pmachineId) => {
    try {
        const query = await prisma.IS_USING.findUnique({
            where: {
                machineId: pmachineId,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.updateUserIsusing = async (pmachineId, puserId) => {
    try {
        const query = await prisma.IS_USING.update({
            where: {
                machineId: pmachineId
            },
            data: {
                userId: puserId
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.updateMachineIsusing = async (pmachineId, puserId) => {
    try {
        const query = await prisma.IS_USING.update({
            where: {
                userId: puserId
            },
            data: {
                machineId: pmachineId
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.deleteIsusing = async (pmachineId, puserId) => {
    try {
        const query = await prisma.IS_USING.delete({
            where: {
                machineId: pmachineId,
                userId: puserId
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}