import { useState } from 'react'
import Menu from"./components/Menu.jsx"
import CreatePost from"./components/CreatePost.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="conatiner">
      <div className="menu-content">
       <Menu/>
      </div>
      <div className="main-content">
        <CreatePost/>
      </div>
      <div className="search-content">
        
        </div>
     </div>
    
    </div>
  )
}

export default App
