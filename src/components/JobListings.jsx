
import React from 'react'
import Spinner from './Spinner';
import {useState, useEffect} from 'react';
import JobListing from './JobListing';

const JobListings = ({isHome = false}) => {
 const [jobs, setJobs] = useState ([]);
 const [loading,setLoading] = useState(true); //loading spinner while fetching data

useEffect (()=> {
const fetchJobs = async () => {

  const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
  try{
    const res = await fetch(apiURL);
    const data = await res.json();
    setJobs(data);
  } catch(error) {
    console.log('Error fetching data', error);
  } finally{
    setLoading(false);
  }

};
fetchJobs();

}, []);  //useffect() takes a function and a dependency array



  return (
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {/*If its home, then show recent jobs, else, show all jobs(Browse Jobs) */}
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
            {   /* When its loading it will show a message*/}
          {loading ? (<Spinner loading={loading}/>) : (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                            <JobListing key ={job.id} job={job}/>
                ))}
            </div>
          )}
        </div>
    </section>
  );
};

export default JobListings