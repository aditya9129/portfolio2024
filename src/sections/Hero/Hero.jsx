import  heroImg from '../../assets/Design uten navn.png'
import sun  from  '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from  '../../sections/Hero/HeroStyles.module.css'
import Linkedindark from '../../assets/linkedin-dark.svg'
import Linkedinlight from '../../assets/linkedin-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import twitterlight from '../../assets/twitter-light.svg'
import githubdark from '../../assets/github-dark.svg'
import githublight from '../../assets/github-light.svg'

import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero(){
   const {theme,toggleTheme}=useTheme();
   const themeIcon=theme==='light' ?sun:moon;
   const LinkedinIcon=theme==='light'?Linkedinlight:  Linkedindark;
   const TwitterIcon=theme==='light'?twitterlight:  twitterdark;
   const githubIcon=theme==='light'?githublight: githubdark;
  return (
     <section id="hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
       <img src={heroImg} alt="profile" height="400px"> 
</img>
       <img src={themeIcon} alt="background" className={styles.colorMode} onClick={toggleTheme}></img>
       
          
       </div>
      
      <div className={styles.info}>
        <h1>ADITYA <br/> AGGARWAL</h1>
        <h2>DEVELOPER</h2>
        <span>
          <a href="https://linkedin.com"><img src={LinkedinIcon} alt="linkedin "></img></a>
          <a href="https://github.com"><img src={githubIcon} alt="github "></img></a>
          <a href="https://x.com"><img src={TwitterIcon} alt="twitter "></img></a>
          
        </span>
       <div> <p >Lorem ipsum dolor sit amsicing elit. Ducimus deserunt quis doe? Rati pariatur ipsum?</p> </div>
        <a href={CV}>  <button>Resume</button>   </a>

      </div>
     </section>
  )
  
}
export default Hero;