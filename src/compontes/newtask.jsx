import { useState } from "react"

export default  function NewTask({onAdd}){
    const[enterredTask ,setenterredTask] = useState();

    function handelChange(e){
        setenterredTask(e.target.value);
     }
 
     function  handelClick(){
        onAdd(enterredTask)
        setenterredTask('');
     }

    
    return(
        <div className="flex items-center gap-4">
            <input type='text' className="w-64 pz-2 py-2 rounded-sm bg-stone-200" onChange={handelChange} value={enterredTask}></input>
            <button className="text-stone-700 hover:text-stone-950">ADD TASk</button>
        </div>
    )
}