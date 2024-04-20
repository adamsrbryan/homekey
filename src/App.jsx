import React from 'react'
import './App.scss'
import Header from './components/Header'
import Property from './components/Property'

function App() {

  return (
    <>
      <Header />
      <Property 
        address={"8408 Hillside Ave."}
        location={"Los Angeles, CA 90069"}
        beds={"5"}
        baths={"9"}
        sqft={"20,058"}
        price={"39,975,000"}
      />
    </>
  )
}

export default App
