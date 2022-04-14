import { useState, useEffect } from 'react';
// Components
import CompletedTask from './CompletedTask';

const Completed = ({ list, updateTask, deleteTask, deleteAll }) => {
  // Completed tasks array
  const [completed, setCompleted] = useState([]);

  // Filtering tasks array to completed tasks
  useEffect(() => {
    setCompleted(list.filter(i => i.completed));
  }, [list])

  if(completed.length > 0){
    return (
      <div className='list-container'>
        <button 
          className='delete-all-btn'
          onClick={deleteAll}
        >
          <i className="fa-solid fa-trash"></i>
          delete all
        </button>
        {completed.map(i => {
          return (
            <CompletedTask 
              key={i.content} 
              task={i}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    );
  }else{
    return '';
  }
}

export default Completed;