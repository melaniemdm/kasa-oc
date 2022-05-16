import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Home';
import ProposPages from '../pages/ProposPages';
import Logements from '../pages/Logements';
import Error404 from '../pages/Error404';
import Header from '../layout/Header';

function RoutesToto(){
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route exact path="/home" element={<Accueil />} />
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/propos" element={<ProposPages />} />
        <Route exact path="/logement/:id" element={<Logements/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
     
    </Router>
  );
}

export default RoutesToto;