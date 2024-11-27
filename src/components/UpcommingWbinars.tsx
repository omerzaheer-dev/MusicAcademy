import React from 'react'
import { TailwindcssButtons } from './TailwindButtons'
import { CardHoverEffectDemo } from './CardHoverEffects'

export const UpcommingWbinars = () => {
    return (
        <div className='p-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h1 className='capitalize text-2xl font-semibold text-cyan-700'>Featured Wabinars</h1>
                    <p className='text-4xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-neutral-100 to-neutral-300'>Enhance Your Musical Journey</p>
                </div>
                <div>
                    <CardHoverEffectDemo />
                </div>
                <div className='text-center'><TailwindcssButtons className='h-12'>View All Wabinars</TailwindcssButtons></div>

            </div>

        </div>
    )
}
