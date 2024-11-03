// src/components/Header.js
import styles from '../styles/Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <nav>
            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="#event-details">Detalhes do Evento</a></li>
                <li><a href="#organizers">Organizadores</a></li>
                <li><a href="#partners">Parceiros</a></li>
                <li><a href="#support">Apoio</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
