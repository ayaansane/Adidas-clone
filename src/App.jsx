import './App.css';
import './components/Footer.css';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Topbar/>
      <Navigation />
      <Body />
      <Footer/>
    </>
  );
}

export default App;
