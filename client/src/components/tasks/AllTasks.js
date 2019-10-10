import React, {useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EveryTask from './EveryTask'
import Spinner from '../layout/Spinner';
import TaskContext from '../../context/task/taskContext';

const AllTasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks, getAll, loading } = taskContext;

  useEffect(() => {
    getAll();
     // eslint-disable-next-line
  }, []);

  if (tasks !== null && tasks.length === 0 && !loading) {
    return <h4 className="center-text">No tasks available...</h4>;
  }

  return (
    <div>
      {tasks !== null && !loading ? (
        <TransitionGroup>
          {tasks.map(task => (
                <CSSTransition
                  key={task._id}
                  timeout={500}
                  classNames='item'
                >
                  <EveryTask task={task} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AllTasks;
