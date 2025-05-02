import { useState } from 'react'
import { Outlet } from 'react-router';
import CustomHeader from './Components/Main/CustomHeader/CustomHeader'
import CustomFooter from './Components/Main/CustomFooter/CustomFooter'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [currentTab, setCurrentTab] = useState('home');
  const activeTab = (clickedTab) => {
    setCurrentTab(clickedTab);
  };

  return (
    <>
      <CustomHeader actions={activeTab}/>
      <Outlet />
      <CustomFooter />
    </>
  )
}

export default App
