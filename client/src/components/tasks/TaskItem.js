import React, { useContext } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskItem = ({ task }) => {
  const taskContext = useContext(TaskContext);
  const { deleteTask, setCurrent, clearCurrent } = taskContext;

  const { _id, name, email, phone, type } = task;

  const onDelete = () => {
    deleteTask(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-left'  style={{color:"#AEDFD5"}}>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'urgent' ? 'badge-danger' : 'badge-light')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-ellipsis-h' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-dollar-sign' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='badge-light btn-sm'
          onClick={() => setCurrent(task)}
        >
          Edit
        </button>
        <button className='badge-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};


export default TaskItem;
