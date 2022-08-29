import styles from './Home.module.css';
import pastora from '../imagens/mary.png'

function Home() {
 return(
  <section className={styles.home_container}>
   <h1>Bem-Vindo a Comunidade <span>Casa da Graça</span>!</h1>
   <p>Conheça quem somos: Nossa Missão e Visão</p>
   <a href="/"> Multimídia</a>
   <img src={pastora} alt="Maristela" id='pra'/>
  </section>
 )
}
export default Home;