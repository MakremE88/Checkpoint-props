import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentProfile from './Profile/Profil';
import nature from './nature.jpg'

function App() {
  let fullname ='Makrem Ellouze';
  const handleName =()=>{
    alert ("Hello "+fullname);
  }
  return (
    <>
    <div style={{color: "red" , textAlign: "center"}} >
      <ComponentProfile handleName = {handleName} fullname = {fullname} bio = "Produit" profession = "Developpeur Front-end" />
      <div style={{display: "block" , margin: "20px auto"}}><img src ={nature} alt=''/></div>
    </div>
    </>
  );
}

export default App;
