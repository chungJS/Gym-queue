const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// CREATE (add user)
app.post('/user', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const new_user = await prisma.USER.create({
            data: {
                email,
                password,
                name
            },
        });
        res.json(new_user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// READ (read a machine)
app.get('/machine/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const machine_info = await prisma.MACHINE.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.json(machine_info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch a machine' });
    }
});

// UPDATE (update a routine)
app.put('/routine/:name', async (req, res) => {
    try {
        const where_name = req.params.name;
        const { name, description, userId } = req.body;
        const record = await prisma.ROUTINE.update({
            where: {
                name: where_name,
            },
            data: {
                name,
                description,
                userId
            },
        });
        res.json(record);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update routine' });
    }
});

// DELETE (delete is_using)
app.delete('/is_using/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const existingRecord = await prisma.IS_USING.findUnique({
            where: {
                userId: parseInt(userId),
            },
        });

        if (!existingRecord) {
            return res.status(404).json({ error: 'not found' });
        }

        await prisma.IS_USING.delete({
            where: {
                userId: parseInt(userId),
            },
        });
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
