// import logo from './logo.svg';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Error from './Error';
import {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
