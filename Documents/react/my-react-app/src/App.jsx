import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
      <>
      <Header/>
      <Student name = "Esandu" age = {20} isStudent = {true}/>
      <Student name = "Patrick" age = {30} isStudent = {false}/>
      <Student name = "Squick" age = {50} isStudent = {false}/>
      <Student name = "Praboda" age = {27} isStudent = {false}/>
      <Student />
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
