// src/components/Partners.js
import styles from '../styles/Support.module.scss';

const Partners = () => (
    <section id="partners" className={styles.partners}>
        <h2>Parceiros</h2>
        <p>Contamos com a parceria de duas grandes instituições de ensino, localizadas na cidade de Belo Jardim - PE.</p>
        <p>Conheça mais sobre os cursos disponíveis:</p>
        <ul>
            <li><a href="https://portal.ifpe.edu.br/belo-jardim/" target="_blank" rel="noopener noreferrer">IFPE Campus Belo Jardim</a></li>
            <li><a href="http://www.uabj.ufrpe.br/br" target="_blank" rel="noopener noreferrer">UABJ - UFRPE</a></li>
        </ul>
    </section>
);

export default Partners;
