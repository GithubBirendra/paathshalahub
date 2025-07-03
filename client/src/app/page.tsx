'use client'
import { Button } from "@/components/ui/button";
import FeaturedCourses from "@/components/featured-courses";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Testimonials from "@/components/ui/testimonials";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";


const Home = ()=>{
  return(
      <div className="min-h-screen">
      <Navbar/>
     <Hero/>
     <FeaturedCourses/>
     <Features/>
    <Testimonials/>
    <Footer/>
    </div>
    
    
  )

}
export default Home;