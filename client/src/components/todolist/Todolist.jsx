import React, { useEffect, useRef, useState } from 'react'
import '../../style/todolist.css'
import Task from './Task'
import { addTask, getAllTasks } from '../../api/api';

function Todolist() {
  const [data,setData] = useState([]);
  const [action,setActionOccurance] = useState();
  const textRef = useRef(null);

  async function addtask()
  {
    const description = textRef.current.value;
    textRef.current.value = '';
    await addTask(description);
    setActionOccurance((old) => !old);
  }

  useEffect(() => {
    async function fetchAllTasks() {
      const tasks = await getAllTasks();
      setData(tasks);
    }
    fetchAllTasks();
  },[action]);

  return (
    <div className='todolist'>
        <p className='list-main-text'>Todolist</p>
        <div className='add-task'>
            <input className='add-task-input' type='text' ref={textRef}/>
            <button className='add-task-btn' onClick={addtask}>
                <p>add</p>
            </button>
        </div>
        {console.log(data)}
        <div className='tasks-list'>
            {data.map((val, i) => (
              <Task data={val} key={i} signalActionOccurance={setActionOccurance}/>
            ))}
        </div>
    </div>
  )
}

export default Todolist