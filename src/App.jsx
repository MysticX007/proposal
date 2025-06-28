import { Routes, Route } from 'react-router-dom'
import Flex from './components/page3'
import Page1 from '../src/components/page1'
import Page2 from '../src/components/page2'
import './App.css'

function App() {

  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/page1' element={<Page2/>}/>
      <Route path='/last' element={<Flex/>}/>
      </Routes>
    </div>
  )
}

export default App
