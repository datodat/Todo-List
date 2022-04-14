const Task = ({ task, updateTask }) => {
  return (
    <div className='list-item'>
      <input
        id={task.content}
        type='checkbox'
        onChange={() => updateTask(task)}
        checked={task.completed ? true : false}
      />
      <label htmlFor={task.content}>{task.content}</label>
    </div>
  );
}

export default Task;