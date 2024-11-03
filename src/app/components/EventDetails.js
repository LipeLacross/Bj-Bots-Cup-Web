// src/components/EventDetails.js
import styles from '../styles/EventDetails.module.scss';

const EventDetails = () => (
    <section id="event-details" className={styles.details}>
        <h2>Detalhes do Evento</h2>
        <p>O BJ Bots Cup teve sua primeira edição no ano de 2023, realizado pelo Instituto Conceição Moura em parceria com as instituições de ensino UABJ - UFRPE e IFPE Campus Belo Jardim.</p>
        <p>A competição de 2024 contará com três modalidades: Sumô, Seguidor de Linha de Velocidade e Cabo de Guerra.</p>
    </section>
);

export default EventDetails;
