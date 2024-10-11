import React from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps{
    children: React.ReactNode,
    className?: string
}

export default function Container({children, className}: ContainerProps){
    const defaultClass = "mx-auto w-full max-w-[1400px] px-6 md:px-0 z-10";
    const combinedClasses = twMerge(defaultClass, className);
    return (
        <div className={combinedClasses}>
            {children}
        </div>
    )
}