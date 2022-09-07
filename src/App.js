// components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Footer from './components/Footer';

// styles
import './stylesheets/main.css';


const App = () => {
  return (
    <div className='App' id='app'>
      <Nav />
      <Hero />
      <Functions />
      <Footer />
    </div>
  );
}

export default App;
