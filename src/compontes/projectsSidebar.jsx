import React from 'react';
import Button from './button';

export default function ProjctsSidebar({ onStartAddPrpject, projects ,onSelectProject,selectProjectId}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-79 rounded-r-xl'>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddPrpject}>+ Add projects</Button>
      </div>
      <ul className='mt-8'>
       
      {projects.map((project) => {
      let cssClasses ='w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800'
       if(project.id===selectProjectId){
        cssClasses +=' bg-stone-800 text-stone-200'
       }else{
        cssClasses += ' text-stone-400'
       }


  return (
    <li key={project.id}>
      <button  className ={cssClasses}onClick={() =>onSelectProject(project.id)}>
        {project.title}
      </button>
    </li>
  );
})}

          
      </ul>
    </aside>
  );
}