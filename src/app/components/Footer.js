import styles from '../styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p>&copy; 2024 BJ Bots Cup. Todos os direitos reservados.</p>
            <nav className={styles.socialLinks}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
            </nav>
        </div>
    </footer>
);

export default Footer;
