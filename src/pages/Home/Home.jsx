import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo a Comunidade <span>Casa da Graça</span>!</h1>
            <p>Conheça quem somos: Nossa Missão e Visão</p>
            <a href="/"> Multimídia</a>
        </section>
    )
}
export default Home;