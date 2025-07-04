'use client'
import CourseLandingPage from '@/components/addNewCourse/courseLandingPage';
import Curriculum from '@/components/addNewCourse/curriculum';
import Settings from '@/components/addNewCourse/settings';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'

const AddNewCourse = () => {
  const [courseData, setCourseData] = React.useState<any>({});

  const handleCourseDataChange = (data: any) => {
    setCourseData(data);
  };

  return (
    <div className='container mx-auto p-4'>
    <div className='flex justify-between'>
        <h1 className='text-2xl font-bold text-gray-800 mb-5'>
        Create a new course
        </h1>
        {/* <Button className='text-sm tracking-wider font-bold px-8  '>SUBMIT</Button> */}
    </div>

    <Card>
        <CardContent>
        <div className='container mx-auto p-4'>
        <Tabs defaultValue='curriculum' className='space-y-4'>
        <TabsList>
<TabsTrigger value='curriculum'> Curriculum </TabsTrigger>
<TabsTrigger value='course-landing-page'> Course Landing Page </TabsTrigger>
<TabsTrigger value='settings'> Settings </TabsTrigger>
    </TabsList>

    <TabsContent value='curriculum'>
      <Curriculum />
        
    </TabsContent>
     <TabsContent value='course-landing-page'>
      <CourseLandingPage
        courseData={courseData}
        onCourseDataChange={handleCourseDataChange}
      />
        
    </TabsContent>
     <TabsContent value='settings'>
      <Settings/>
        
    </TabsContent>

        </Tabs>
        </div>

        </CardContent>
    </Card>

    </div>
  )
}

export default AddNewCourse;