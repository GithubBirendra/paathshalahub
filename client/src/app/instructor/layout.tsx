import React, { ReactNode } from 'react';
import Link from 'next/link';
import { BookOpen, LayoutDashboard, LogOut, Users } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex justify-start items-start'>
      <aside className='bg-gray-100 min-h-screen rounded-lg w-60 p-2 mx-1 my-1'>
        <ul>
          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <LayoutDashboard className='mr-2'/>
            <Link href="/instructor/dashboard">Dashboard</Link>
          </li>

          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <BookOpen className='mr-2'/>
            <Link href="/instructor/courses">Courses</Link>
          </li>

          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <Users className='mr-2'/>
            <Link href="/instructor/student">Student</Link>
          </li>

          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <LogOut className='mr-2'/>
            <Link href="/">Log Out</Link>
          </li>
        </ul>
      </aside>
      <main className='flex-1 bg-gray-100 rounded-lg min-h-screen w-full mx-1 my-1'>
        {children}
      </main>
    </div>
  );
}
