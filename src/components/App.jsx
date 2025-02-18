import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';


// const TG = window.Telegram.WebApp;

// console.log(TG);

function App() {
  return (
    <div className="App">
      <h1>esplace</h1>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
      </Routes>

      
    </div>
  );
}

export default App;
