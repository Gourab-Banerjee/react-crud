
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import List from './components/List'
import Register from './components/Register'
import Update from './components/Update'


function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/list" element={<List/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/update/:id" element={<Update />}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
