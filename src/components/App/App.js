import './App.css';
import Header from '../Header/Header';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Main from '../Main/Main';
import About from '../About/About';
import Interior from '../Interior/Interior';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';
import MenuOfClub from '../MenuOfClub/MenuOfClub';
import FromUs from '../FromUs/FromUs';

function App() {
  return (
    <>
      <Header>
        <HeaderNavigation />
      </Header>
      <Main />
      <About />
      <Interior>
        <NavSwitchesCards />
      </Interior>
      <MenuOfClub />
      <FromUs />
    </>
  );
}

export default App;
