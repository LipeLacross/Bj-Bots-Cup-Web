import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.scss';

const Page = () => (
    <div className={styles.contactPage}>
        <Header />
        <main className={styles.mainContent}>
            <h1>Fale Conosco</h1>
            <p>
                Quer saber mais sobre a BJ Bots Cup? Estamos aqui para responder suas perguntas e ajudar da melhor forma possível!
                Entre em contato conosco através dos seguintes canais:
            </p>
            <ul className={styles.contactList}>
                <li>
                    <strong>Email:</strong> <a href="mailto:contato@bjbotscup.com">contato@bjbotscup.com</a>
                </li>
                <li>
                    <strong>Telefone:</strong> <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
                </li>
            </ul>
            <p>
                Estamos à disposição para tirar dúvidas, receber sugestões ou qualquer outro tipo de comunicação que desejar.
            </p>
        </main>
        <Footer />
    </div>
);

export default Page;
