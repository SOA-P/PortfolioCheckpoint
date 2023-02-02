
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
// import Projet1 from "./pages/Projet1"
// import Projet2 from "./pages/Projet2";
// import Projet3 from './pages/Projet3';
// import Projet4 from './pages/Projet4';
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          * <Route path="/" element={<Home />} />
          {/* <Route path="/projet-1" element={<Projet1/>}/>
          <Route path="/projet-2" element={<Projet2/>}/>
          <Route path="/projet-3" element={<Projet3/>}/>
          <Route path="/projet-4" element={<Projet4/>}/> */} 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;