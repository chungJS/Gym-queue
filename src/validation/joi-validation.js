const Joi = require('joi');

const register = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
    name: Joi.string().min(3).max(30).required(),
})

const login = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

const machineUse = Joi.object({
    machineId: Joi.number().required(),
    userId: Joi.number().required(),
})

const routineAdd = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().required(),
    userId: Joi.number().required(),
    machines: Joi.array(),//.items(Joi.number()).required(),
    times: Joi.array(),//.items(Joi.string()).required(),
}).custom((value, helpers) => {
    if (value.machines.length !== value.times.length) {
        return helpers.error('any.invalid');
    }
    return value;
});

module.exports = {
    register,
    login,
    machineUse,
    routineAdd,
}