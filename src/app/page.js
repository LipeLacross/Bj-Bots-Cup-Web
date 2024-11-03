import Header from './components/Header';
import Hero from './components/Hero';
import EventHistory from './components/EventHistory';
import EventDetails from './components/EventDetails';
import CallToActionTeachers from './components/CallToActionTeachers';
import TeamsList from './components/TeamsList';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import Support from './components/Support';
import Footer from './components/Footer';

const HomePage = () => (
    <div>
        <Header />
        <Hero />
        <EventHistory />
        <EventDetails />
        <CallToActionTeachers />
        <TeamsList />
        <Organizers />
        <Partners />
        <Support />
        <Footer />
    </div>
);

export default HomePage;
