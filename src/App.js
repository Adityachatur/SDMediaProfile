import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbars/Navbar';
import ScrollToTop from './Components/SubPages/ScrollToTop';
import Timeingset from './Components/SubPages/Timeingset';
function App() {
  return (
    <>
      <ScrollToTop />
      <div className='bg-color1 relative z-0 '>
        <Navbar />
      </div>
      <Routes>
        <Route path='/timeset' element={<Timeingset />} />

      </Routes>

    </>
  );
}

export default App;
