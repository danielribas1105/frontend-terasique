import React, { ElementType } from "react"
import Link from "next/link"
import { twMerge } from "tailwind-merge";

export interface NavItemProps {
   className?: string
   label: string,
   href: string,
   icon: ElementType,
   iconSize: number
}

export default function NavItem(props: NavItemProps) {
   const defaultClass = "flex items-center gap-1 text-2xl text-logo-dark-green hover:text-logo-green dark:text-logo-green dark:hover:text-green-700"
   const combinedClasses = twMerge(defaultClass, props.className)
   return (
      <Link href={props.href} className={combinedClasses}>
         <props.icon size={props.iconSize} />
         <span className="font-title">{props.label}</span>
      </Link>
   )
}