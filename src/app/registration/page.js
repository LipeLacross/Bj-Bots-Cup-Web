import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Registration.module.scss';

const Page = () => (
    <div className={styles.registrationPage}>
        <Header />
        <main className={styles.mainContent}>
            <h1>Inscrições Abertas</h1>
            <p>
                Em breve você poderá se inscrever na BJ Bots Cup 2024! Preencha o formulário de inscrição e garanta a participação da sua equipe neste evento incrível.
                Não perca a oportunidade de fazer parte dessa competição de robótica emocionante!
            </p>
            <div className={styles.registrationDetails}>
                <h2>Detalhes para Inscrição</h2>
                <p>
                    As inscrições serão abertas a partir de <strong>Janeiro de 2024</strong>. Serão aceitas equipes de instituições de ensino de todo o país.
                    Cada equipe deverá ter entre 3 e 5 membros, incluindo um mentor.
                </p>
                <p>
                    Fique atento ao nosso site e redes sociais para ser o primeiro a saber quando as inscrições abrirem!
                </p>
                <button className={styles.subscribeButton}>Saiba Mais</button>
            </div>
        </main>
        <Footer />
    </div>
);

export default Page;
