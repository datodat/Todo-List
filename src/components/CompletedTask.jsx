const CompletedTask = ({ task, updateTask, deleteTask }) => {
  return (
    <div className='list-item completed-item'>
      <div>
        <input
          id={task.content}
          type='checkbox'
          onChange={() => updateTask(task)}
          checked={task.completed ? true : false}
        />
        <label htmlFor={task.content}>{task.content}</label>
      </div>
      <i 
        className="fa-solid fa-trash"
        onClick={() => deleteTask(task)}
      ></i>
    </div>
  );
}

export default CompletedTask;