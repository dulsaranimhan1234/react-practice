import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
      <>
      <Header/>
      <Student name = "Esandu" age = {20} isStudent = {true}/>
      <UserGreeting isLoggedIn={true}/>

      
      <Card/>
      <Card/>
      <Card/>
      <Button/>
      <Food/>
      
      <Footer/>
      
      </>
         
  );
  
}

export default App
