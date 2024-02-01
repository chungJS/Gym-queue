const routineRepo = require('../repositories/routine-repo');
const inroutineRepo = require('../repositories/in_routine-repo');

exports.routineAdd = async (req, res) => {
    const {name, description, userId , machines, times} = req.body;
    const new_routine = await routineRepo.addRoutine(name, description, userId);
    for (let i = 0; i < machines.length; i++) {
        await inroutineRepo.addInroutine(new_routine.id, machines[i], times[i]);
    }
    res.json(new_routine);
}

exports.routineList = async (req, res) => {
    const routines = await routineRepo.listRoutines();
    res.json(routines);
}