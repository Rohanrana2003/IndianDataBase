import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Whyus from './components/Whyus'
import Home from './components/Home'

function App() {

  return (
    <>
      <Header />

      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/whyus" element={ <Whyus /> } />

      </Routes>
    </>
  )
}

export default App
