"use client";

import styles from '../styles/EventHistory.module.scss';
import { useEffect, useRef } from 'react';

const EventHistory = () => {
    const historyRef = useRef(null);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.classList.add(styles.appear);
        }
    }, []);

    return (
        <section className={styles.history} ref={historyRef}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2>História do Evento</h2>
                <div className={styles.eventBlock}>
                    <h3>2023: Primeira Edição</h3>
                    <p>
                        O BJ Bots Cup teve sua primeira edição no ano de 2023, realizado pelo Instituto Conceição Moura em parceria com as instituições de ensino UABJ - UFRPE e IFPE Campus Belo Jardim.
                    </p>
                </div>
                <div className={styles.eventBlock}>
                    <h3>2024: Segunda Edição</h3>
                    <p>
                        Em 2024, tivemos a segunda edição do BJ Bots Cup, com o apoio inédito da RoboCore, trazendo ainda mais inovação e entusiasmo para o evento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventHistory;
