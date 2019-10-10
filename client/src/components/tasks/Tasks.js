import React, {useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from './TaskItem';
import Spinner from '../layout/Spinner';
import TaskContext from '../../context/task/taskContext';

const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks, filtered, getTasks, loading } = taskContext;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  if (tasks !== null && tasks.length === 0 && !loading) {
    return <h4 className="center-text">Add your tasks</h4>;
  }

  return (
    <div>
      {tasks !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(task => (
                <CSSTransition
                  key={task._id}
                  timeout={500}
                  classNames='item'
                >
                  <TaskItem task={task} />
                </CSSTransition>
              ))
            : tasks.map(task => (
                <CSSTransition
                  key={task._id}
                  timeout={500}
                  classNames='item'
                >
                  <TaskItem task={task} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Tasks;
