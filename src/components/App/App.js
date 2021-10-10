import './App.css';
import Header from '../Header/Header';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Main from '../Main/Main';
import About from '../About/About';
import Interior from '../Interior/Interior';
import MenuOfClub from '../MenuOfClub/MenuOfClub';
import FromUs from '../FromUs/FromUs';
import News from '../News/News';
import WindowAdditionalProduct from '../WindowAdditionalProduct/WindowAdditionalProduct';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header>
        <HeaderNavigation />
      </Header>
      <Main />
      <About />
      <Interior>
      </Interior>
      <MenuOfClub />
      <FromUs />
      <News 
        countCardOnPage={3}
      />
      <WindowAdditionalProduct 
        title="Наш клуб входит в состав ресторана Panorama ASP"
        description="Поэтому гости могут не только насладиться дымным, но и попробовать самые разнообразные коктейли, а также вкусно поесть"
        btnName="Подробнее о ресторане "
      />
      <Footer />
    </>
  );
}

export default App;
