import React, { useEffect } from 'react'
import {useState, useffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true); //loading spinner while fetching data
    
    useEffect(()=>{
        const fetchjob = async () => {
        try{
            const res = await fetch(`/api/jobs/${id}`);
            const data = await res.json();
            setJob(data);
        } catch(error) {
            console.log('Error fetching data', error);
        } finally{
            setLoading(false);
        }
        };
        fetchjob();
    },[]);



  return (
   <>
     {loading ? (<Spinner/>) : (<h1>{job.title}</h1>)}
   </>
  );
};



export default JobPage