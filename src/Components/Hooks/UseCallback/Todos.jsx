import React, { memo } from 'react'

const Todos = ({todo, addTodo}) => {
    console.log("child rerender");
  return (
    <div className='flex flex-col items-center'>
    <div className="todo-div max-h-52 overflow-y-scroll">{todo.map((e, i)=>{
        return (<div key={i} className='flex flex-col'>{e}</div> )
    })}
    </div>
    <button className='text-white bg-red-700 px-6 py-2' onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default memo(Todos)