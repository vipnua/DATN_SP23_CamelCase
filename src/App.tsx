import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import LayoutEmployer from './components/layouts/LayoutWebsite/LayoutEmployer'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutEmployer />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>

    </div>
  )
}

export default App
