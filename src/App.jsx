import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './MainContent.jsx'

function App() {

  return (
    <>
      <div className='app-container'>
        <Sidebar/>
        <div className='main-content'>
          <MainContent/>
        </div>
      </div>
    </>
  )
}

export default App
