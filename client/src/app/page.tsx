import { Button } from "@/components/ui/button";
import { NavigationMenuDemo} from "@/components/ui/navbar";
import Link from "next/link";
import React from "react";

const Home = ()=>{
  return(
    <div className="flex flex-row items-center mt-1 gap-4">
      <NavigationMenuDemo/>
          <Link href="/login"><Button>Sign In</Button></Link> 

      <Link href="/register"><Button>Register</Button></Link> 
    </div>
    
    
  )

}
export default Home;