import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Social from './components/social/social';
import Jumbotron from './routes/HomePage/Jumbotron/jumbotron';
import Stack from './routes/HomePage/Stack/stack';
import Work from './routes/HomePage/Work/work';
import About from './routes/HomePage/About/about';
import Projects from './routes/HomePage/Projects/projects';
import Contact from './routes/HomePage/Contact/contact';
import Footer from './components/footer/footer';
import "animate.css/animate.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Social />
      <Jumbotron />
      <About />
      <Stack />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
