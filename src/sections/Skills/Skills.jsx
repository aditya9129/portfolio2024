import lightcheck from "../../assets/checkmark-dark.svg"
import darkcheck from  "../../assets/checkmark-light.svg"
import styles from "./SkillsStyles.module.css"
import { useTheme } from '../../common/ThemeContext'
function Skills(){
    const {theme}=useTheme();
    const themeIcon=theme==='dark' ? lightcheck:darkcheck;
 return (
  
   <section className={styles.container}>
        <div>
        <h1>SKILLS</h1>
         <div className={styles.skills}>
          <div className={styles.group} >
              <p><img src={themeIcon}></img> HTML</p>
              <p><img src={themeIcon}></img>CSS</p>
             <p><img src={themeIcon}></img>JavaScript</p>
          </div>
          <hr/>
             
          <div className={styles.group}>
             <p><img src={themeIcon}></img>React</p>
             <p><img src={themeIcon}></img>Tailwind CSS</p>
             <p><img src={themeIcon}></img>Bootstrap</p>
          </div>
          <hr/>


          <div className={styles.group}>
             <p><img src={themeIcon}></img>Problem Solving</p>
             <p><img src={themeIcon}></img>Data Structures</p>
             <p><img src={themeIcon}></img>Algorithms</p>
          </div>
          
          </div>
         
       
         
         
        </div>




   </section>
 )
}

export default Skills;



