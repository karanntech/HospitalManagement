import React from 'react'
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import MessageForm from "../components/MessageForm.jsx";
import Department from "../components/Department.jsx";


const Home = () => {
  return (
    <>
      <Hero
        title={"HealthSync: Streamlining Hospital Operations for Better Patient Care"}
        imageUrl = {"/hero"}
      />
      <Biography imageUrl={"/about"}/>
      <Department/>
      <MessageForm/>
    </>
  )
}

export default Home;