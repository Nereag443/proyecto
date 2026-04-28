import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MySpace } from './pages/mySpace'
import { Stats } from './pages/stats'
import { Navbar } from './components/navbar'
import NotFound from './pages/notFound'

function App() {
  return (
    <BrowserRouter>
     <Navbar />

     <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/mySpace" element={<MySpace />} />
      <Route path="/stats" element={<Stats />} />
      {/* <Route path="/profile" element={<Profile />} />*/}
      <Route path="*" element={<NotFound />} />
     </Routes>

    </BrowserRouter>
  )
}

export default App
