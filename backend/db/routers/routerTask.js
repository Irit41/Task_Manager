
const express = require('express');

const router = new express.Router()
const Task = require('../models/task');
router.get('/test', (req, res) => {
    res.send("this is from task file")

})










router.delete('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'User not found' });

        }
        res.send(task);

    } catch (error) {

        res.status(500).send()
    }


})



router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body)
        await task.save();
        res.status(201).send(task)

    } catch (error) {
        res.status(400).send(error)

    }

})


router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => {
        allowedUpdates.includes(update)
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates !' })
        }
    })
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send();
        }
        res.send(task)

    } catch (error) {
        res.status(400).send(error)

    }
})


router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);

    } catch (error) {
        res.status(500).send(error)

    }

})

router.get('/tasks/:id', async (req, res) => {

   
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send(task);

    } catch (error) {
        res.status(500).send()

    }

})

module.exports = router


