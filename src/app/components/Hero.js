import styles from '../styles/Hero.module.scss';

const Hero = () => (
    <section className={styles.hero}>
        <h1>BJ Bots Cup</h1>
        <p>Participe dessa incrível experiência robótica no dia 11 de Abril de 2024 no Ginásio do IFPE Belo Jardim!</p>
        <a href="#event-details" className={styles.cta}>Veja a Programação do Evento</a>
    </section>
);

export default Hero;
