import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from '../components/nav'
import Logo from '../components/logo'
import Heading from '../components/heading 1'
import Search from '../components/searchbar'
import Heading2 from '../components/heading 2'
import Form from '../components/form'
import Text from '../components/text'
import Instagram from '../components/instagram'
import Twitch from '../components/twitch'
import Twitter from '../components/twitter'
import Youtube from '../components/Youtube'
import Message from '../components/submit msg'
import Ok from '../components/ok'
import Overlay1 from '../components/oberlay 1'
import Employee from '../components/edit list'

 const employeeData = [
    {firstName: "David", lastName: "Hughes", email: "davidhughes@gmail.com", number: "064 870 7457", position: "Tester", id: "9403056749081", image: "./src/assets/diego-hernandez-MSepzbKFz10-unsplash.jpg"},
    {firstName: "Mei", lastName: "Beifong", email: "mbeifong@gmail.com", number: "082 674 1239", position: "Junior Animator", id: "99120143218091", image: "./src/assets/aiony-haust-ITXtNqvfdOw-unsplash.jpg"},
    {firstName: "Kenneth", lastName: "Okiri", email: "okiri892gmail.com", number: "073 123 7651", position: "Senior Graphics Programmer", id: "8908017864081", image: "./src/assets/roland-cousins-3GTHyh2lo9o-unsplash.jpg"},
    {firstName: "Hector", lastName: "Alvarez", email: "hectoralvaroalvarez@gmail.com", number: "082 563 8876", position: "Senior Animator", id: "9607248765431", image: "./src/assets/albert-dera-ILip77SbmOE-unsplash.jpg"},
    {firstName: "Samuel", lastName: "Patel", email: "SPatel@gmail.com", number: "063 987 4321", position: "Senior Audio Programmer", id: "9101032334081", image: "./src/assets/slava-jamm-8fyRSkyI6pQ-unsplash.jpg"},
  ]

const App = () => {
  const [filteredList, setFilteredList] = useState(employeeData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;

    if(!query){
      setFilteredList(employeeData)
      setSearchQuery(query);
      return
    }


    setSearchQuery(query);

    const searchList = filteredList.filter((item) => {
      return item.name.toLowerCase().indexOf(query/toLowerCase()) !== -1;

    });

    setFilteredList(searchList)
  };

  const onFilterChange = (event) => {};


   return (
    <>
      <div className='nav'>
        <Navigation></Navigation>
      </div>

      <section className='section-1'>

        <div className='half-1'>
          <Heading></Heading>
          <input type="text" className="searchbar" placeholder="Search Employee I.D Number" onChange={handleSearch} value={searchQuery}></input>
          <Employee></Employee>
          
        </div>
          
        <div>
          <Heading2></Heading2>
          <Form/>
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
