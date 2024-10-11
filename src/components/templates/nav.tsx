import { twMerge } from "tailwind-merge";

export interface NavMenuProps {
    children: React.ReactNode,
    className?: string
}

export default function NavMenu({ children, className }: NavMenuProps) {
    const defaultClass = "flex gap-4";
    const combinedClasses = twMerge(defaultClass, className);
    return (
        <nav className={combinedClasses}>
            {children}
        </nav>
    )
}