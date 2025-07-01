'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Delete, Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

//  Define the Course type
type Course = {
  _id: string;
  title: string;
  price: number;
  students?: string[]; // or use any[] if unknown
};

const CoursesPage = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]); //  Set the type of course list

  //  Fetch courses from backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get<Course[]>('http://localhost:8080/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to load courses', error);
    }
  };

  return (
    <Card>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle className='text-xl font-extrabold'>
          All Courses
        </CardTitle>
        <Button onClick={() => router.push('/instructor/createCourse')} className='p-4'>
          Create New Course
        </Button>
      </CardHeader>

      <CardContent>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course._id}>
                  <TableCell className='font-medium'>{course.title}</TableCell>
                  <TableCell>{course.students?.length ?? 0}</TableCell>
                  <TableCell>Rs.{course.price}</TableCell>
                  <TableCell className='text-right flex gap-2 justify-end'>
                    <Button variant='ghost' size='sm'>
                      <Edit className='h-5 w-5' />
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <Delete className='h-5 w-5' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoursesPage;
