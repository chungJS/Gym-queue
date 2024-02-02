const routineRepo = require('../repositories/routine-repo');
const inroutineRepo = require('../repositories/in_routine-repo');
const validation = require('../validation/joi-validation');

exports.routineAdd = async (req, res) => {
    try{
        const {name, description, userId , machines, times} = await validation.routineAdd.validateAsync(req.body);
        const new_routine = await routineRepo.addRoutine(name, description, userId);
        for (let i = 0; i < machines.length; i++) {
            await inroutineRepo.addInroutine(new_routine.id, machines[i], times[i]);
        }
        res.json(new_routine);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.routineList = async (req, res) => {
    const routines = await routineRepo.listRoutines();
    res.json(routines);
}