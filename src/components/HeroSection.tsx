import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from "@/lib/utils";
import { Button } from './ui/moving-border';
export default function HeroSection() {
    return (
        <div className='h-[46vh] md:h-[40rem] w-full mx-auto py-6 md:py-0 flex items-center justify-center relative overflow-hidden'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='p-4 text-center relative top-10 md:top-0 z-40'>
                <h1 className='text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className='mt-7'>
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            borderClassName="h-[120px] w-[90px]"
                            containerClassName="h-14"
                            className="bg-white dark:bg-black/[0.96] text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}