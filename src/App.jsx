import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddEmployee from '../components/addEmployee'
import Navigation from '../components/nav'
import ReadEmployee from '../components/readEmployeeInfo'
import Search from '../components/searchbar'

 const employeeData = [
    {firstName: "David", lastName: "Hughes", email: "davidhughes@gmail.com", number: "064 870 7457", position: "Tester", id: "9403056749081", image: "./src/assets/diego-hernandez-MSepzbKFz10-unsplash.jpg"},
    {firstName: "Mei", lastName: "Beifong", email: "mbeifong@gmail.com", number: "082 674 1239", position: "Junior Animator", id: "99120143218091", image: "./src/assets/aiony-haust-ITXtNqvfdOw-unsplash.jpg"},
    {firstName: "Kenneth", lastName: "Okiri", email: "okiri892gmail.com", number: "073 123 7651", position: "Senior Graphics Programmer", id: "8908017864081", image: "./src/assets/roland-cousins-3GTHyh2lo9o-unsplash.jpg"},
    {firstName: "Hector", lastName: "Alvarez", email: "hectoralvaroalvarez@gmail.com", number: "082 563 8876", position: "Senior Animator", id: "9607248765431", image: "./src/assets/albert-dera-ILip77SbmOE-unsplash.jpg"},
    {firstName: "Samuel", lastName: "Patel", email: "SPatel@gmail.com", number: "063 987 4321", position: "Senior Audio Programmer", id: "9101032334081", image: "./src/assets/slava-jamm-8fyRSkyI6pQ-unsplash.jpg"},
  ]

const App = () => {
 

   return (
    <>
     <section style={{display:"flex"}}>
      <Navigation/>
     </section>

<section style={{display:"flex"}}>
   <div style={{textAlign:"center"}}>
      <AddEmployee/>
     </div>

     <div style={{margin:"2%", textAlign:"center"}}>
      <Search/>
     </div>
</section>

<section>
  <ReadEmployee/>
</section>
    
       
    </>
  )
}
  

 
  
 


export default App
