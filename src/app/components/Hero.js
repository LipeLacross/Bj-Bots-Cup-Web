"use client";

import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const offset = window.scrollY;
                heroRef.current.style.backgroundPositionY = `${offset * 0.4}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>BJ Bots Cup</h1>
                <p className={styles.subtitle}>
                    Participe dessa incrível experiência robótica no dia 11 de Abril de 2024 no Ginásio do IFPE Belo Jardim!
                </p>
                <a href="#event-details" className={styles.cta}>Veja a Programação do Evento</a>
            </div>
        </section>
    );
};

export default Hero;
