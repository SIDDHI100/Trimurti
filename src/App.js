import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar/NavBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Owner from './components/Owners/Owner';
import Varieties from './components/Varieties/Varieties';
import Footer from './components/Footer/Footer';
import Brands from './components/brands/Brands';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <ImageGallery/>
       <Owner/>
       <Varieties/>
       <Brands/>
       <Footer/>
        
      </header>
    </div>
  );
}

export default App;
