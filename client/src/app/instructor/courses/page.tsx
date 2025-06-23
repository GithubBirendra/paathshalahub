'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Delete, Edit } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const CoursesPage = () => {
  const router = useRouter();
  // const navigate= useNavigate();
  return (
    <Card>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle className='text-xl font-extrabold'>
          All Courses
        </CardTitle>
        <Button onClick={()=>router.push('/instructor/createCourse')}  className='p-4'>
          Create New Course
        </Button>
      </CardHeader>

      <CardContent>
        <div className='overflow-x-auto'>

          <Table>
  <TableHeader>
    <TableRow>
      <TableHead >Course</TableHead>
      <TableHead>Students</TableHead>
      <TableHead>Revenue</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">MERN Stact Full Course</TableCell>
      <TableCell>100</TableCell>
      <TableCell>Rs.25000</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm">
          <Edit className='h-6 w-6' />
        </Button>

       <Button variant="ghost" size="sm">
          <Delete className='h-6 w-6' />
        </Button>

      </TableCell>
    </TableRow>
  </TableBody>
</Table>

        </div>

      </CardContent>

    </Card>



    // <div>
    //   <Link href="/instructor/create">
    //   <Button className='m-2 p-4 bg-blue-500 text-white hover:bg-blue-600'>
    //     New Course
    //   </Button>
    //   </Link>
    // </div>
  )
}

export default CoursesPage;