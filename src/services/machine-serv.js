const machineRepo = require('../repositories/machine-repo');
const isusingRepo = require('../repositories/is_using-repo');
const validation = require('../validation/joi-validation');

exports.machineUse = async (req, res) => {
    try{
        const { machineId, userId } = await validation.machineUse.validateAsync(req.body);
        const new_use = await isusingRepo.addIsusing(machineId, userId);
        res.json(new_use);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.machineList = async (req, res) => {
    const machines = await machineRepo.listMachines();
    res.json(machines);
}