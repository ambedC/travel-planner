import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import CoverPage from './components/CoverPage';
import FormPage from './components/FormPage';
import BlogPage from './components/BlogPage';
import Planner from './components/Planner';
import Itinerary from './components/Itinerary';

export default function App() {

  const [visible, setVisible] = React.useState("A")

  function toggleHome(e){
    e.preventDefault();
    setVisible("A")
  }

  function toggleLogin(e){
    e.preventDefault();
     setVisible("B")
   }

  function toggleSign(e){
      e.preventDefault();
      setVisible("C")
  }

  function toggleBlog(e){
    e.preventDefault();
    setVisible("D")
  }

  function togglePlanner(e){
    e.preventDefault();
    setVisible("E")
  }

  function toggleItinerary(e){
    e.preventDefault();
    setVisible("F")
  }
 
   return (
     <div className='App'>

        <Navbar 
           toggleHome = {toggleHome}
           toggleLogin = {toggleLogin}
           toggleSign = {toggleSign}
           toggleBlog = {toggleBlog}
           togglePlanner = {togglePlanner}
        />

      {visible == "B" &&
        <FormPage
                 login = {true}
                 header = "LOGIN"
                cText = "Keep me signed in."
                buttonName = "Login"
                lastLine = "Dont have an account? Create one."
      />
      }

      {visible == "A" && <CoverPage/>}
      
      {visible == "C" &&
          <FormPage
         sign = {true}
          header = "SIGN UP"
           cText = "I agree to the Terms and Conditions"
           buttonName = "Sign Up"
           lastLine = "Already a Trippp user? Sign In"
        />
      }

      {visible == "D" && <BlogPage/>}
       
      {visible == "E" && 
        <Planner
        toggleItinerary = {toggleItinerary}
        />}

      {visible == "F" && <Itinerary/>}
  </div>
   )
 
}

