import logo from './logo.svg';
import './App.css';
import ProdDisplay from './Componets/Display/ProdDisplay';
import CartItem from './Componets/CartItem/CartItem';
import { Route, Routes } from 'react-router-dom';
import About from './Componets/About/About';
import Services from './Componets/Services/Services';
import Contact from './Componets/Contact/Contact';
import Registration from './Componets/Registration/Registration';
import Login from './Componets/Login/Login';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element = {<Registration/>}></Route>
    <Route path="/Login" element = {<Login/>}></Route>
    
    <Route path="/products" element = {<ProdDisplay/>}></Route>
    <Route path="/about" element = {<About/>}></Route>
    <Route path="/services" element = {<Services/>}></Route>
    <Route path="/cartitem" element = {<CartItem/>}></Route>
    <Route path="/contact" element = {<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
