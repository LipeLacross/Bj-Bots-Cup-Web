// src/app/page.js
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import Support from './components/Support';

export default function Home() {
  return (
      <div>
        <Header />
        <Hero />
        <EventDetails />
        <Organizers />
        <Partners />
        <Support />
      </div>
  );
}
