import { useState } from 'react'
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

  return (
    <>
      <div className='bg-black'>Hello World!</div>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
