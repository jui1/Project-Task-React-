import noProjectImage from '../assets/no-projects.png'
import Button from './button.jsx';  // Corrected file name to 'Button.js'
 
export default function NoProjectelector({onStartAddPrpject}){
    return(
        <div className=" mt-24 text-center w-1/3">
            <img  src={noProjectImage} alt='no ' className='w-16  h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>Np Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a Project or get Started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddPrpject}>Create new Project</Button>
            </p>
        </div>
    )
}