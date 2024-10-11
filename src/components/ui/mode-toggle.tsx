"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { Button } from "./button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun 
            className={`h-[1.25rem] w-[1.25rem]  
              ${theme === 'dark' ? 'text-zinc-400 scale-0' : 'text-logo-gray-one rotate-0 scale-100'} 
              transition-all`
            }
          />
          <Moon 
            className={`absolute h-[1.25rem] w-[1.25rem] 
              ${theme === 'dark' ? 'text-zinc-400 -rotate-0 scale-100' : 'text-logo-gray-one scale-0'}  
              transition-all`
            }
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}