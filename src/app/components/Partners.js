import styles from '../styles/Partners.module.scss';

const Partners = () => (
    <section id="partners" className={styles.partners}>
        <h2>Parceiros</h2>
        <p>Conheça nossos parceiros:</p>
        <ul>
            <li><a href="https://portal.ifpe.edu.br/belo-jardim/" target="_blank" rel="noopener noreferrer">IFPE Campus Belo Jardim</a></li>
            <li><a href="http://www.uabj.ufrpe.br/br" target="_blank" rel="noopener noreferrer">UABJ - UFRPE</a></li>
        </ul>
    </section>
);

export default Partners;
