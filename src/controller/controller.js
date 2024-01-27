const express = require('express');
const controller = express.Router();
const userService = require('../services/user-serv');
const machineService = require('../services/machine-serv');
const routineService = require('../services/routine-serv');

controller.post('/signup', userService.userRegister);
controller.get('/login', userService.userLogin);

controller.post('/usemachine', machineService.machineUse);
controller.get('/listmachine', machineService.machineList);

controller.post('/addroutine', routineService.routineAdd);
controller.get('/listroutine', routineService.routineList);

module.exports = controller;
module.exports = express.Router();