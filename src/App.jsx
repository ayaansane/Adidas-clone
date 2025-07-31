import './App.css';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';
import Topbar from './components/Topbar';

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
