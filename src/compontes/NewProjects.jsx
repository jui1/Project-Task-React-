import { useReducer, useRef } from "react"
import Input from "./input.jsx"
import Model from "./model.jsx";

export default function NewProjects({ onAdd,onCencle }) {
    const modal =useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
  

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDueDate = dueDate.current.value;

 if(  enterTitle.trim()===' '|| enterDescription.trim() ===''|| enterDueDate.trim()===''){

modal.current.open();
return;
 }
    onAdd({
        title: enterTitle,
        description: enterDescription,
        dueDate: enterDueDate,
    });
  }

  return (
    <>
    <Model ref={modal}> 
   <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
   <p className='text-stone-400 mb-4'>Please make sure you provide a valid value for  evry Input filed</p>
    </Model>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950" onClick={onCencle}>Cancel</button></li>
        <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
      </menu>
      <div>
      <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea={true} />
        <Input type="date" ref={dueDate} label="DUE DATE" />
      </div>
    </div>
    </>
  );
}