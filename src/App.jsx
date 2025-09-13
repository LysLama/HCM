import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Intro from './sections/Intro';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import ScrollToTopButton from './components/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Menu />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App
