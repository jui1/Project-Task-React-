import { createPortal } from "react-dom"
import Button from "./button.jsx";
import { forwardRef,useImperativeHandle,useRef } from "react"
 const Model =  forwardRef( function Model({children,buttoncaption},ref){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            open(){
   dialog.current.showModal();
            }
        }
    })
    return  createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 shadow-md">
            {children}
            <form  metod='dialog' className='text-right mt-4'>
                <Button >{buttoncaption} Save</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    )

});
export default Model;