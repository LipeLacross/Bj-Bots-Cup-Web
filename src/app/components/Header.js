"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import logo from '../../../public/img/robo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollingDown(true);
            } else {
                setScrollingDown(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`${styles.header} ${scrollingDown ? styles.hidden : ''}`}>
            <div className={styles.logoContainer}>
                <a href="/">
                    <Image src={logo} alt="BJ Bots Cup Logo" width={50} height={50} />
                    <span className={styles.logoText}>BJ BOTS CUP</span>
                </a>
            </div>
            <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></div>
            </button>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/registration">Inscrições</a></li>
                    <li><a href="#event-details">Detalhes do Evento</a></li>
                    <li><a href="#organizers">Organizadores</a></li>
                    <li><a href="#partners">Parceiros</a></li>
                    <li><a href="#support">Apoio</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
