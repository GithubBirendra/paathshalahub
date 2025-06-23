'use client'
import { Button } from "@/components/ui/button";
import FeaturedCourses from "@/components/featured-courses";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import { NavigationMenuDemo} from "@/components/ui/navbar";
import Testimonials from "@/components/ui/testimonials";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";


const Home = ()=>{
// const {email} = useSelector(state=>state.user)
  return(
        <div className="min-h-screen">
    <div className="flex flex-row items-center mt-1 gap-4">
      {/* {email} */}
      <NavigationMenuDemo/>
          <Link href="/login"><Button>Sign In</Button></Link> 

      <Link href="/register"><Button>Register</Button></Link> 
    </div>
     <Hero/>
     <FeaturedCourses/>
     <Features/>
    <Testimonials/>
    <Footer/>
    </div>
    
    
  )

}
export default Home;