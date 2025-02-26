import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Whyus from './components/Whyus'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />

      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/whyus" element={ <Whyus /> } />
      <Route path="/contact" element={ <Contact /> } />
      

      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
