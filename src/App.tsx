import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import LayoutWebsite from './components/layouts/LayoutWebsite'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>

    </div>
  )
}

export default App
