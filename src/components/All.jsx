// Components
import Task from './Task';

const All = ({ list, updateTask }) => {

  if(list.length > 0){
    return (
      <div className='list-container'>
        {list.map(i => {
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

export default All;