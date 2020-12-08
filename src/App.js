import React  from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Tweet from './Components/Tweet'
import Trends from './Components/Trends'

function App() {
  

  return (
    <div className='twitter'>
      <Sidebar />
      <Tweet />
      <Trends />
      
    </div>
   
  )

  }
 
  

export default App;
