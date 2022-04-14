import { useState, useEffect } from 'react';
// Components
import Task from './Task';

const Active = ({ list, updateTask }) => {
  // Active tasks array
  const [activeList, setActiveList] = useState([]);

  // Filtering tasks array to active tasks
  useEffect(() => {
    setActiveList(list.filter(i => !i.completed))
  }, [list])

  if(activeList.length > 0){
    return (
      <div className='list-container'>
        {activeList.map(i => {
          return (
            <Task 
              key={i.content} 
              task={i} 
              updateTask={updateTask} 
            />
          );
        })}
      </div>
    );
  }else{
    return '';
  }
}

export default Active;