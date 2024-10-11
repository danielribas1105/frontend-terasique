import React from "react"
import { twMerge } from "tailwind-merge"

export interface SectionProps{
    children: React.ReactNode,
    className?: string
}

export default function Section({children, className}: SectionProps){
    const defaultClass = "w-full flex"
    const combinedClasses = twMerge(defaultClass, className)
    return (
        <section className={combinedClasses}>
            {children}
        </section>
    )
}