"use client"

import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import { MagicCard } from "@/components/magicui/magic-card";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Ripple from "@/components/magicui/ripple";

export default function Home() {
  return (

    <main className="">

      <div>
        <NextUIProvider className="w-full h-full">
          {/* <BlurIn word={"Hello World"}></BlurIn> */}
          {/* <Input type="email" label="Email" placeholder="Enter your email" /> */}
          {/* <MagicCard className="w-24 h-24"></MagicCard> */}

          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
              Ripple
            </p>
            <Ripple />
          </div>
        </NextUIProvider>

      </div>



    </main>
  );
}
