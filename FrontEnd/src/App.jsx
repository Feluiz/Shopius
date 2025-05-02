import { useState } from 'react'
import { Outlet } from 'react-router';
import CustomHeader from './Components/Main/CustomHeader/CustomHeader'
import CustomFooter from './Components/Main/CustomFooter/CustomFooter'
import axios from 'axios'
import './App.css'

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
