import './App.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import BackImg from './Components/BackgroundImg';
import Card from './Components/Main';
import Newtitle from './Components/Title';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <BackImg />
    <Newtitle title={"free"}/>
    <Card card={"100.00"} span={"200.01"} sels={"free membership"}/>
    <Card card={"105.00"} span={"205.06"} sels={"free membership"}/>
    <Card card={"110.00"} span={"210.08"} sels={"free membership"}/>
    <Card card={"150.00"} span={"215.10"} sels={"free membership"}/>
    <Newtitle title={"premium"}/>
    <Card card={"200.00"} span={"300.10"} sels={"premium membership"}/>
    <Card card={"300.00"} span={"400.50"} sels={"premium membership"}/>
    <Card card={"400.00"} span={"500.60"} sels={"premium membership"}/>
    <Card card={"500.00"} span={"600.90"} sels={"premium membership"}/>
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
