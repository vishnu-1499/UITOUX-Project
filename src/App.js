import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Parts from './components/Parts';
import Product from './components/Product';
import Banner from './components/Banner';
import RatedProduct from './components/RatedProduct';
import Provision from './components/Provision';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home/>
        <Parts />
        <Product />
        <Banner />
        <RatedProduct />
        <Provision />
      </Router>
        <Footer />
    </div>
  );
}

export default App;