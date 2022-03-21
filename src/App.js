import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContinentHeader from './components/ContinentHeader/ContinentHeader';
import Continents from './components/Continents/Continents';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Continents />
            </>
          )}
        />
        <Route
          path="/:continentName"
          element={(
            <>
              <ContinentHeader />
              <Countries />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
