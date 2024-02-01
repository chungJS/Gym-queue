const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CRUD

exports.addMachine = async (pname, ptarget) => {
    try {
        const new_machine = await prisma.MACHINE.create({
            data: {
                name: pname,
                target: ptarget
            },
        });
        return new_machine;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findMachineById = async (pid) => {
    try {
        const query = await prisma.MACHINE.findUnique({
            where: {
                id: pid,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findMachineByName = async (pname) => {
    try {
        const query = await prisma.MACHINE.findMany({
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

exports.findMachineByTarget = async (ptarget) => {
    try {
        const query = await prisma.MACHINE.findMany({
            where: {
                target: ptarget,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.listMachines = async () => {
    try {
        const query = await prisma.MACHINE.findMany();
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.updateMachine = async (pid, pname, ptarget) => {
    try {
        const query = await prisma.MACHINE.update({
            where: {
                id: pid,
            },
            data: {
                name: pname,
                target: ptarget
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.deleteMachine = async (pid) => {
    try {
        const query = await prisma.MACHINE.delete({
            where: {
                id: pid,
            },
        });
        return query;
    } catch (error) {
        console.error(error);
        throw error;
    }
}