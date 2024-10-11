import React from "react";
import { twMerge } from "tailwind-merge";

export interface AsideProps{
    children: React.ReactNode,
    className?: string
}

export default function Aside({children, className}: AsideProps){
    const defaultClass = "flex"
    const combinedClasses = twMerge(defaultClass, className)
    return (
        <aside className={combinedClasses}>
            {children}
        </aside>
    )
}