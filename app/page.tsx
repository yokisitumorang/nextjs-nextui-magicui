"use client"

import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Input} from "@nextui-org/input";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <div>
     <NextUIProvider>
      {/* <BlurIn word={"Hello World"}></BlurIn> */}
      <Input type="email" label="Email" placeholder="Enter your email" />
    </NextUIProvider>
      
    </div>
     

      
    </main>
  );
}
