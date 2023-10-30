import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import BlogSingle from './components/BlogSingle';
import CalorieCounter from './components/CalorieCounter';
import Cart from './components/Cart';
import ClassDetails from './components/ClassDetails';
import Classes from './components/Classes';
import Contact from './components/Contact';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Subscription from './components/Subscription';
import Trainer from './components/Trainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/trainer" element={<Trainer />}> </Route>
        <Route path="/class" element={<Classes />}> </Route>
        <Route path="/class-details" element={<ClassDetails />} />
        {/* <Route path="/class-details" element={< ClassDetails />}> </Route> */}
        <Route path="/schedule" element={<Schedule />}> </Route>
        <Route path="/blog" element={<Blog />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/cart" element={<Cart />}> </Route>
        <Route path="/subscription" element={< Subscription />}> </Route>
        <Route path="/calorie-counter" element={< CalorieCounter />}> </Route>
        <Route path="/blog-single" element={< BlogSingle />}> </Route>
        <Route path="/create-account" element={<CreateAccount />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
