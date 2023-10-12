import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/Navbar';
import Banner from './component/Banner';
import Card from './component/Card';
import './App.css'
function App() {
  let arr = [1,2,3,4];

  return (
    <>
      <BasicExample></BasicExample>
      <Banner></Banner>
      <div className='container listcar'>
        {arr.map((item) =>{
          return<Card key={item}></Card>
        })}
      </div>
    </>
  )
}

export default App
