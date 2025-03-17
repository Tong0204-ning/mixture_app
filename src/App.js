import './CSS/App.css';
import Navigation from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  return (
    <div className='containerSetting'>
      <Navigation className='navigationItems' />
      <Main className='mainContent' />
      <Footer className='Footeritems' />
    </div>
  );
}

export default App;
