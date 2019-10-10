import React from 'react';

const EveryTask = ({ task }) => {

  const {title, description, amount, email, phone, type} = task;

  return (
    <div className='card bg-light'>
      <h3 className='text-left'  style={{color:"#AEDFD5"}}>
        {title}{' '}
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
        {description && (
          <li>
            <i className='fas fa-ellipsis-h' /> {description}
          </li>
        )}
        {amount && (
          <li>
            <i className='fas fa-dollar-sign' /> {amount}
          </li>
        )}
         {email && (
          <li>
            <i className='fas fa-envelope' /> {email}
          </li>
        )}
         {phone && (
          <li>
            <i className='fas fa-phone-alt' /> {phone}
          </li>
        )}
      </ul>
    </div>
  );
};


export default EveryTask;
