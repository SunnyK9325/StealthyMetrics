import React from 'react'
import Navbar from './components/Navbar/Navbar'
import DashboardPanel from './components/DashboardPanel/DashboardPanel'
import ActivityPanel from './components/ActivityPanel/ActivityPanel'
import './App.scss'

const App = () => {
  return (
    <>
      <div className="dashboard">
        <div className='container'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='dashboardPanel'>
            <DashboardPanel />
          </div>
          <div className='activityPanel'>
            <ActivityPanel />
          </div>

        </ div>
      </div>
    </>
  )
}
export default App;
