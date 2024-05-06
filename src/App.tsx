import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Complete from './pages/Complete/Complete';
import Page5 from './pages/Page5/Page5';
import Admin from './pages/Admin/Admin';
import Page3_5 from './pages/Page3/Page3_5';
import Message from './pages/Page4/Message';
import Lines from './pages/Page4/Lines';
import Comment from './pages/Page5/Comment';
import Live from './pages/Page6/Live';
import DataByUser from './components/Admin/DataByUser';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/1/:id' element={<Page1 />} />
        <Route path='/2/:id' element={<Page2 />} />
        <Route path='/3/:id' element={<Page3 />} />
        <Route path='/3_5/:id' element={<Page3_5 />} />
        <Route path='/message/:id' element={<Message />} />
        <Route path='/line/:id' element={<Lines />} />
        <Route path='/comment/:id' element={<Comment />} />
        <Route path="/databyuser/:id" element={<DataByUser/>} />
        <Route path='/live/:id' element={<Live />} />
        <Route path='/4/:id' element={<Page4 />} />
        <Route path='/5/:id' element={<Page5 />} />
        <Route path='/complete/:id' element={<Complete />} />
      </Routes>
    </main>
  );
}

export default App;
