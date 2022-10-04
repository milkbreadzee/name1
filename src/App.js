import React from 'react';
import Navbar from './components/Navbar';
import {Profile} from "./pages/Profile"
import {Route, Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Request from './pages/Request';
import Lending from './pages/Lending';



function App() {
  return (
  
    <BrowserRouter>
    <div>
          <Routes>
            <Route path= "/" element = {<Home />}/>
            <Route path="/profile" element = {<Profile />}/> 
            <Route path="/request" element = {<Request />}/>
            <Route path="/lending" element = {<Lending   />}/>
          </Routes>
          <Navbar />
          
         
          

          
          
    </div>
    </BrowserRouter>
    
  );
}

export default App;
