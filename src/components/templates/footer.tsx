import { IconCoffee, IconHeart } from "@tabler/icons-react"
import Container from "../layout/container"

export default function Footer() {
   return (
      <footer>
         <Container
            className="w-full h-12 flex flex-col gap-2 text-logo-gray mt-4">
            <div className="flex gap-2 items-center justify-center md:justify-start">
               <p>Desenvolvido com</p>
               <IconHeart size={20} color="#ff0000"/>
               <p>e</p>
               <IconCoffee size={20} color="#b5842a"/>
            </div>
            <div className="text-center md:text-start">@ 2024 - Todos os direitos reservados - DRCode</div>
         </Container>
      </footer>
   )
}