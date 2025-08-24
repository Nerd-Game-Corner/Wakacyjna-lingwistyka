
import './App.css'
import AppRoutes from'./components/AppRoutes'
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes />
    </BrowserRouter>
  ); 
}

