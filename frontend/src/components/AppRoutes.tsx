import Home from './../pages/Home';
import Mock from './../pages/Mock';
import { Routes, Route} from 'react-router-dom';

export default function AppRoutes(){
    return (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <Home/> } />
          <Route path="/mock" element={ <Mock/> } />
        </Routes>
    );
}
    