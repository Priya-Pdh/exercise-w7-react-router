import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemondetails/:pokemonid" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
