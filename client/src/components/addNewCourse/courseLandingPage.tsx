import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const CourseLandingPage = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Course Landing Page
            </CardTitle>

        </CardHeader>
        <CardContent>
        <div className='text-sm text-gray-500 mt-2'>
          Customize your course landing page with a compelling title, description, and promotional video to attract students.       
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Course Title</h2>
            <input 
                type="text" 
                placeholder="Enter course title" 
                className="w-full p-2 border border-gray-300 rounded mt-2"
            />
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Course Description</h2>
            <textarea 
                placeholder="Enter course description" 
                className="w-full p-2 border border-gray-300 rounded mt-2"
                rows={4}
            />  
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Promotional Video</h2>
            <input 
                type="text" 
                placeholder="Enter video URL" 
                className="w-full p-2 border border-gray-300 rounded mt-2"
            />
        </div>
        <div className='mt-4'>  
            <h2 className='text-lg font-semibold'>Course Image</h2>
                <input 
                    type="file" 
                    accept="image/*" 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Price</h2>
                <input 
                    type="number" 
                    placeholder="Enter course price" 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />  
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Category</h2>
                <select 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                >
                    <option value="">Select category</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="business">Business</option>
                </select>   
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Level</h2>
                <select 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Language</h2>
                <select 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                >
                    <option value="">Select language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                </select>
        </div>  
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Requirements</h2>
                <textarea 
                    placeholder="Enter course requirements" 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    rows={3}
                />  
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course Outcomes</h2>
                <textarea 
                    placeholder="Enter course outcomes" 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    rows={3}
                />  
        </div>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Course FAQ</h2>
                <textarea 
                    placeholder="Enter course FAQ" 
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    rows={3}
                />
        </div>
        
            
            
        </CardContent>
    </Card>
    
  )
}

export default CourseLandingPage