import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Data from "./Data"

export default function App(){
  
  const card = Data.map(item => {
    return (
     <Card 
         key = {item.id}
         item = {item}
     />
    )
})
    
  return (
    <div>
      <Navbar />
      {card}
    </div>
  )
}