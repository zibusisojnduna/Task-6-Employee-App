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




function App() {
  const [count, setCount] = useState(0)
    
  
  return (
    <>
      <div className='nav'>
        <Navigation></Navigation>
      </div>

      <section className='section-1'>

        <div className='half-1'>
          <Heading></Heading>
          <Search></Search>
          
        </div>
          
        <div>
          <Heading2></Heading2>
          <Form></Form>
        </div>

       

      </section>

      <section className='section-2'>
         <div id='overlay-1'>
          <Message></Message>
          <Ok></Ok>
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
