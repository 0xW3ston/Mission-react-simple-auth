import React, { useEffect, useState } from 'react'
import trashIcon from '../../assets/trash_icon.svg'
import { deleteTask } from '../../api/api'



function Task({data, signalActionOccurance}) {

  async function removeTask(_id) {
    await deleteTask(_id);
    signalActionOccurance((old) => !old);
  }

  return (
    <div className='task'>
        <div className='task-section'>
            <input className='task-checkbox' type='checkbox'/>
            <p className='task-text'>{data['description']}</p>
        </div>
        <button className='task-delete'>
            <img src={trashIcon} className='task-delete-btn' task-id={data['_id']} alt='Delete' onClick={() => removeTask(data['_id'])}/>
        </button>
    </div>
  )
}

export default Task