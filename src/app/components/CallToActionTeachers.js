import styles from '../styles/CallToActionTeachers.module.scss';

const CallToActionTeachers = () => (
    <section className={styles.callToAction}>
        <h2>Atenção Professores e Mentores</h2>
        <p>
            Venha inspirar a próxima geração de talentos em robótica no BJ Bots Cup! Tragam suas turmas para participar deste evento incrível, onde aprendizado e tecnologia se encontram. Seja um mentor e ajude a transformar o futuro. Agende sua visita pelo WhatsApp e junte-se a nós nesta jornada de inovação e criatividade!
        </p>
        <a href="https://wa.me/seu_numero" className={styles.ctaButton}>
            Agende sua Visita
        </a>
    </section>
);

export default CallToActionTeachers;
