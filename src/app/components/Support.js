import styles from '../styles/Support.module.scss';

const Support = () => (
    <section id="support" className={styles.support}>
        <h2>Apoio</h2>
        <p>
            Este ano, temos o imenso prazer de contar com o apoio da RoboCore, uma das maiores referências em robótica do país! As equipes vencedoras serão premiadas com o Kit Master de Arduino, e todos os participantes receberão cupons de desconto exclusivos. Estamos juntos, somando forças para incentivar a criatividade e o desenvolvimento tecnológico.
        </p>
        <a href="https://www.robocore.net/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Saiba mais sobre a RoboCore
        </a>
    </section>
);

export default Support;
