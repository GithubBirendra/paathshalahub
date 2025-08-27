import AddCourseForm from '@/components/addNewCourse/courseLandingPage';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditCourse = () => {
    const [editCourses, setEditCourses] = useState();
    const [loading, setLoading] = useState(true);

    const fetchCourses = async()=>{
        try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course`);
      setEditCourses(data);
    } catch (error) {
    console.error("Error fetching courses", error);
    } finally {
        setLoading(false);
        }
        };

        useEffect(()=>{
            fetchCourses();
        }, []);

        if(loading){
            return <p className='text-center py-10 text-gray-600'>Loading Courses...</p>;
        }
        

  return (
    <AddCourseForm/>
  )
}

export default EditCourse