import React from 'react'
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import MessageForm from "../components/MessageForm.jsx";
import Department from "../components/Department.jsx";
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero
        title={"HealthSync: Streamlining Hospital Operations for Better Patient Care"}
        imageUrl = {"/hero"}
      />
      <Biography imageUrl={"/about"}/>
      <Department/>
      <MessageForm/>
      <Footer/>
    </>
  )
}

export default Home;