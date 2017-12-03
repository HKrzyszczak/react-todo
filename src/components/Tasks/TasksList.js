import React  from  'react';
import Task from './Task';

const TasksList = (props) => (
      props.tasks
        .filter((task) => task.toUpperCase().indexOf(props.filter.toUpperCase()) !== -1 )
        .map((task, index) => (
            <Task key={index}
                  label={task} />
        ))
);

export default TasksList;