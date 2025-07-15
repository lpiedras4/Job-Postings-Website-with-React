import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
const App = () => {
  return (
    <>
    <Navbar/>
    {/*Here we can define props inside a component from its own file */}
    <Hero />
    <HomeCards/>
   <JobListings/>
   <ViewAllJobs/>
    </>
  );
}

export default App;