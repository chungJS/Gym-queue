const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CRUD

exports.addInroutine = async (proutineId, pmachineId, pset_time) => {
    try {
        const new_inroutine = await prisma.IN_ROUTINE.create({
            data: {
                proutineId,
                pmachineId,
                pset_time
            },
        });
        return new_inroutine;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findInroutineByRoutineId = async (proutineId) => {
    try {
        const query = await prisma.IN_ROUTINE.findMany({
            where: {
                routineId: proutineId,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.updateSetInroutine = async (proutineId, pmachineId, pset_time) => {
    try {
        const query = await prisma.IN_ROUTINE.update({
            where: {
                routineId: proutineId,
                machineId: pmachineId
            },
            data: {
                set_time: pset_time
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.deleteInroutine = async (proutineId) => {
    try {
        const query = await prisma.IN_ROUTINE.delete({
            where: {
                routineId: proutineId
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}