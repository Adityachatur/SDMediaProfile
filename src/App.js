import './App.css';
import Navbar from './Components/Navbars/Navbar';
import ScrollToTop from './Components/SubPages/ScrollToTop';
function App() {
  return (
    <>
      <ScrollToTop />
      <div className='bg-color1 relative '>
        <Navbar />
      </div>
    
    </>
  );
}

export default App;
