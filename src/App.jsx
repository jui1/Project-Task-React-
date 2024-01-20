import { useState } from "react";

import NewProjecrs from "./compontes/NewProjects";
import NoProjectelector from "./compontes/noProjectSeclitor";
import ProjctsSidebar from "./compontes/projectsSidebar";
import Selected from  './compontes/selectedProject'
function App() {

  const [projectState , setProjectsState] = useState({
   
    selectedProject :undefined,
    projects:[],
    tasks:[]
  })
  function handelAAtask(text){
    setProjectsState(prevState =>{
      const projectID = Math.random();
      const newTask={
    
      text : text,
      projectID: prevState.selectedProject,
      id :taskId,
        }
        return{
          ...prevState,
          selectedProject:undefined,
          projects:[newTask,...prevState.tasks]
        }
      })
  }
  

  function handelSatrt(){
    setProjectsState( prevState =>{
      return{
        ...prevState,
        selectedProject:null,
      }
    })
  }
  function handelSelectProject(id){
    setProjectsState( prevState =>{
      return{
        ...prevState,
        selectedProject:id,
      }
    })
  }

  function handelDD(id){
    setProjectsState(prevState =>{
      
      return{
        ...prevState,
        selectedProject:undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProject)
        
      }
    })
  }

  function handleCancelAAProject(){
    setProjectsState(prevState =>{
      
        return{
          ...prevState,
          selectedProject:undefined,
          
        }
      })
  }
  
function handelAddProject(projectData){
  setProjectsState(prevState =>{
  const projectID = Math.random();
    const newProject={

  ...projectData,
   id:projectID
    }
    return{
      ...prevState,
      selectedProject:undefined,
      projects:[...prevState.projects,newProject]
    }
  })
}
const selectedProject = projectState.projects.find(project => project.id===projectState.selectedProject);
  let content= <Selected project={selectedProject} onDeleteTask={handelDD} onDelete={handelAAtask} tasks={projectState.tasks}/>
  if(projectState.selectedProject===null){
  content =<NewProjecrs onAdd={handelAddProject} onCencle={handleCancelAAProject}/>
  } else if(projectState.selectedProject ===undefined){
        content=<NoProjectelector onStartAddPrpject={handelSatrt}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjctsSidebar onStartAddPrpject={handelSatrt} projects={projectState.projects}  onSelectProject={handelSelectProject}/>
      {/* <NoProjectelector onStartAddPrpject={handelSatrt}/> */}
      {content}
    </main>
  );
}

export default App;
