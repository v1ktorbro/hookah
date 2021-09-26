import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import About from '../About/About';
import Interior from '../Interior/Interior';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';
import MenuOfClub from '../MenuOfClub/MenuOfClub';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main />
      <About />
      <Interior>
        <NavSwitchesCards />
      </Interior>
      <MenuOfClub />
    </>
  );
}

export default App;
