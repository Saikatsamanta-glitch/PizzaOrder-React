import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Messege from './Pages/Message';
import Settings from './Pages/Settings';
import History from './Pages/History';
import Fav from './Pages/Fav';
import NavBar from './Component/Navbar';
import Wallet from './Pages/Wallet';
import Cart from './Component/Cart';
function App() {

  return (
   
      <div className="flexing">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<Messege />} />
            <Route path="/setings" element={<Settings />} />
            <Route path="/history" element={<History />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
           <Cart/> 
        </BrowserRouter>

      </div>
  
  );
}

export default App;
