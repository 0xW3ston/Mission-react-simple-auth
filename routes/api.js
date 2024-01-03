const { Router } = require('express');
const router = Router();
const Tasks = require('../model/Task');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.TaskModel.find()
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/', async (req, res) => {
    const description = req.body.description;

    try {
        let tasks = await Tasks.TaskModel.create({
            description: description
        })
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const tasks = await Tasks.TaskModel.findById(req.params.id)
//         res.send(tasks)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// router.put('/:id', async (req, res) => {
//     try {
//         const tasks = await Tasks.TaskModel.findByIdAndUpdate(req.params.id, {
//             key:value
//         },{new: true})
//         res.send(tasks)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

router.delete('/:id', async (req, res) => {
    try {
        const tasks = await Tasks.TaskModel.findByIdAndDelete(req.params.id)
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router