 import viber from "../../assets/viberr.png"
 import netflix from "../../assets/netflix.png"
 import styles from "./ProjectsStyles.module.css"
 import coderoom from "../../assets/coderoom.png"
function Projects(){
  return (
    <section className={styles.container}>
         <div>
         <h1>PROJECTS</h1>
         <div className={styles.projects}>
          
          <a >
            <img src={coderoom} alt="project-img"></img>
            <h2>CodeRoom</h2>
            <h3>MultiUser CodeEditor</h3>
           </a>
          
          <a href="https://netclixgpt.netlify.app/">
            <img src={netflix} alt="project-img"></img>
            <h2>NetclixGPT</h2>
            <h3>Streaming app</h3>
           </a>
          
           <a href="https://airbnb.com/">
            <img src={viber} alt="project-img"></img>
            <h2>Viber</h2>
            <h3>Streaming app</h3>
           </a>
          
          
          
          </div>
        
          
          
         </div>




    </section>
  )
}

export default Projects;