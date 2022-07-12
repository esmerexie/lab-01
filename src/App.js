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
      <img src={Cow} alt='cow' height={200} width={200}/>
      <Main />
      <img src={Goat} alt='goat'height={200} width={200}/>
      <Main />
      <Footer />
    </div>
  );
}
export default App;
