import './CSS/App.css';
import Navigation from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import { useLocation } from 'react-router-dom';


function App() {

  const register_location = useLocation();

  return (
    <div className='containerSetting'>
      {register_location.pathname !== '/register' && <Navigation className='navigationItems' />}
      <Main className='mainContent' />
      {register_location.pathname !== '/register' && <Footer className='Footeritems' />}
    </div>
  );
}

export default App;
