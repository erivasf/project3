import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskForm = () => {
  const taskContext = useContext(TaskContext);

  const { addTask, updateTask, clearCurrent, current } = taskContext;

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({
        title: '',
        description: '',
        amount: '',
        email: '',
        phone: '',
        type: ''
      });
    }
  }, [taskContext, current]);

  const [task, setTask] = useState({
    title: '',
    description: '',
    amount: '',
    email: '',
    phone: '',
    type: ''
  });

  const { title, description, amount, email, phone, type } = task;

  const onChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addTask(task);
    } else {
      updateTask(task);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary' style={{color: "#AEDFD5" }}>
        {current ? 'Edit Task' : 'Add Task'}
      </h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
       <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={onChange}
      />
        <input
        type='text'
        placeholder='Offer'
        name='amount'
        value={amount}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Contact email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Contact number'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Urgent</h5>
      <input
        type='radio'
        name='type'
        value='urgent'
        checked={type === 'urgent'}
        onChange={onChange}
      />{' '}
      YES{' '}
      <input
        type='radio'
        name='type'
        value=''
        checked={type === ''}
        onChange={onChange}
      />{' '}
      NO
      <div>
        <input
          type='submit'
          value={current ? 'Update Task' : 'Add Task'}
          className='btn btn-block'
          style={{backgroundColor: "#AEDFD5", color:"gray"}}
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-block' style={{backgroundColor: "#AEDFD5", color:"gray"}} onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
