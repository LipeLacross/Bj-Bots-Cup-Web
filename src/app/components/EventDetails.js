import styles from '../styles/EventDetails.module.scss';

const EventDetails = () => (
    <section id="event-details" className={styles.details}>
        <h2>Detalhes do Evento</h2>
        <p>A competição de 2024 contará com três modalidades: Sumô, Seguidor de Linha de Velocidade e Cabo de Guerra.</p>
    </section>
);

export default EventDetails;
