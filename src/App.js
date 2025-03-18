import './CSS/App.css';
import Navigation from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='containerSetting'>
        <Navigation className='navigationItems' />
        <Main className='mainContent' />
        <Footer className='Footeritems' />
      </div>
    </Router>
  );
}

export default App;
