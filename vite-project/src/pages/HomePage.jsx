import React from 'react'
import Hero from '../component/Hero'
import HomeCards from '../component/HomeCards'
import JobListings from '../component/JobListings'
import ViewAllJobs from '../component/ViewAllJobs'
const HomePage = () => {
  return (
    <div>
       
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
   
    </div>
  )
}

export default HomePage