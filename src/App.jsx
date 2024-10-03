import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from '../components/nav'
import Logo from '../components/logo'
import Text from '../components/text'
import Instagram from '../components/instagram'
import Twitch from '../components/twitch'
import Twitter from '../components/twitter'
import Youtube from '../components/Youtube'
import EmployeeManager from '../components/employeeManager'

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
      <div className='nav'>
        <Navigation></Navigation>
      </div>

      <section className='section-1'>

        <div className='half-1'>
         
          
        </div>
          
        <div>
          <EmployeeManager/>
        </div>

       

      </section>

      <section className='section-2'>
         
         <div>
           {/* {filteredList.map((item, index) => {
          return(
              <Employee></Employee>
          )
         }} */}
         </div>

        
     
          
         




         
      </section>

      
       <section className='section-3'>
        <div className='footer'>
          <Logo></Logo>
          <Text></Text>
          <Instagram></Instagram><br></br>
          <Twitch></Twitch><br></br>
          <Twitter></Twitter><br></br>
          <Youtube></Youtube><br></br>


        </div>
       </section>
    </>
  )
}
  

 
  
 


export default App
