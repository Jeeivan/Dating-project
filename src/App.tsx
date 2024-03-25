import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Complete from './pages/Complete/Complete';
import Page5 from './pages/Page5/Page5';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1/:id' element={<Page1 />} />
        <Route path='/2/:id' element={<Page2 />} />
        <Route path='/3/:id' element={<Page3 />} />
        <Route path='/4/:id' element={<Page4 />} />
        <Route path='/5/:id' element={<Page5 />} />
        <Route path='/complete/:id' element={<Complete />} />
      </Routes>
    </main>
  );
}

export default App;
