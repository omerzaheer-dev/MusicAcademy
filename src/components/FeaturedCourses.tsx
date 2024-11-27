"use client";
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { TailwindcssButtons } from './TailwindButtons'
import CourseData from "@/data/music_courses.json"
import Link from 'next/link';
interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
export const FeaturedCourses = () => {
    const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900 w-full'>
            <div>
                <div className="text-center">
                    <h1 className="text-teal-600 tracking-wider font-semibold text-base uppercase">FEATURED COURSES</h1>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl leading-10">Learn With the Best</p>
                </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-7 pb-10 gap-y-6 justify-center place-items-center'>
                {
                    featuredCourses.map((course: Course, index: number) => (
                        <div key={index}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:px-8 sm:py-10 bg-white dark:bg-zinc-900">
                                <p className="text-base sm:text-xl text-black mb-2 mt-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-sm mb-3 text-neutral-600 dark:text-neutral-400">{course.description}</p>
                                <Link href={`/course/${course.slug}`}><TailwindcssButtons className='h-9 px-[14px]'>Learn More...</TailwindcssButtons></Link>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
            <div className='text-center'><TailwindcssButtons className='h-12'>Explore More...</TailwindcssButtons></div>
        </div>
    )
}
