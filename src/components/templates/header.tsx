'use client'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
   IconHome,
   IconUserSearch,
   IconMenu2,
   IconMailShare,
   IconBrain,
   IconPuzzle
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Container from "../layout/container"
import NavMenu from "@/components/templates/nav"
import NavItem from "@/components/templates/nav-item"
import logoHeaderDark from "@/../public/img/logo/logo-terasique-dark.png"
import logoHeaderLight from "@/../public/img/logo/logo-terasique-light.png"
import { useState } from "react"

export default function Header() {

   const [open, setOpen] = useState(false)
   const { theme } = useTheme()

   return (
      <header className="z-10">
         <Container className="flex justify-between items-center gap-20 py-4">
            <Link href={"/"}>
               <Image
                  src={theme === 'dark' ? logoHeaderDark : logoHeaderLight}
                  width={250}
                  height={80}
                  alt="Logo DRCode - Developer"
               />
            </Link>
            <div className="flex gap-3 md:gap-5">
               <NavMenu className={'hidden md:flex md:tracking-wider'}>
                  <NavItem
                     label={'Home'}
                     href={'/'}
                     icon={IconHome}
                     iconSize={30}
                  />
                  <NavItem
                     label={'Sobre nós'}
                     href={'/sobre-nos'}
                     icon={IconPuzzle}
                     iconSize={30}
                  />
                  <NavItem
                     label={'Técnicas Terapêuticas'}
                     href={'/tecnicas-terapeuticas'}
                     icon={IconBrain}
                     iconSize={30}
                  />
                  <NavItem
                     label={'Nossos Profissionais'}
                     href={'/profissionais'}
                     icon={IconUserSearch}
                     iconSize={30}
                  />
                  <NavItem
                     label={'Contato'}
                     href={'/contato'}
                     icon={IconMailShare}
                     iconSize={30}
                  />
               </NavMenu>
               <ModeToggle />
               <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger asChild
                     className={"md:hidden text-logo-gray hover:text-zinc-300 border rounded-md hover:border-none"}
                     onClick={() => setOpen(!open)}>
                     <IconMenu2 size={40} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem onClick={() => { setOpen(false) }}>
                        <NavItem
                           label={'Home'}
                           href={'/'}
                           icon={IconHome}
                           iconSize={20}
                        />
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => { setOpen(false) }}>
                        <NavItem
                           label={'Sobre nós'}
                           href={'/sobre-nos'}
                           icon={IconPuzzle}
                           iconSize={20}
                        />
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => { setOpen(false) }}>
                        <NavItem
                           label={'Técnicas Terapêuticas'}
                           href={'/tecnicas-terapeuticas'}
                           icon={IconBrain}
                           iconSize={20}
                        />
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => { setOpen(false) }}>
                        <NavItem
                           label={'Nossos Profissionais'}
                           href={'/profissionais'}
                           icon={IconUserSearch}
                           iconSize={20}
                        />
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => { setOpen(false) }}>
                        <NavItem
                           label={'Contato'}
                           href={'/contato'}
                           icon={IconMailShare}
                           iconSize={20}
                        />
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </Container>
      </header>
   )
}