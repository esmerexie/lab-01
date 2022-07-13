import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cow from './images/cows.jpg';
import Goat from './images/moutainlion.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <Main img={Cow} title="Horned Beast" website="https://www.pexels.com/search/animals%20with%20horns/" description="this is a cow! moo!"/>
      <Main img={Goat} title="Another Horned Beast" website="https://www.pexels.com/search/animals%20with%20horns/" description="this is a goat"/>
      <Footer />
    </div>
  );
}
export default App;
