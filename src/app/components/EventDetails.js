import styles from '../styles/EventDetails.module.scss';

const EventDetails = () => (
    <section id="event-details" className={styles.details}>
        <h2>Detalhes do Evento</h2>
        <div className={styles.eventDetailsContent}>
            <div className={styles.eventItem}>
                <h3>Sumô</h3>
                <p>
                    Onde os robôs competem em força e estratégia para tirar o oponente da arena.
                </p>
            </div>
            <div className={styles.eventItem}>
                <h3>Seguidor de Linha de Velocidade</h3>
                <p>
                    Desafiando a precisão e a velocidade dos competidores ao longo do percurso.
                </p>
            </div>
            <div className={styles.eventItem}>
                <h3>Cabo de Guerra</h3>
                <p>
                    Um verdadeiro teste de tração e potência entre robôs.
                </p>
            </div>
            <div className={styles.eventItem}>
                <h3>ArtBot</h3>
                <p>
                    Uma modalidade inovadora onde os robôs demonstram sua criatividade e habilidades artísticas, trazendo uma mistura de arte e tecnologia para o evento.
                </p>
            </div>
        </div>
        <p className={styles.eventNote}>
            Prepare-se para muita adrenalina, inovação e criatividade!
        </p>
    </section>
);

export default EventDetails;
