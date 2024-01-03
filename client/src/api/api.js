import axios from 'axios';

const getAllTasks = async () => {
    const res = await axios.get('http://localhost:81/api/tasks');
    return (res.data);
}

const addTask = async (description) => {
    const res = await axios.post('http://localhost:81/api/tasks'
    ,{
        description: description
    });
}

const deleteTask = async (_id) => {
    const res = await axios.delete(`http://localhost:81/api/tasks/${_id}`);
}

export {
    getAllTasks,
    addTask,
    deleteTask
}