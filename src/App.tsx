import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
