import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './sections/Intro';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App
