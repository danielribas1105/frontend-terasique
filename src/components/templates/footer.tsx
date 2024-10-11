import { IconCoffee, IconHeart } from "@tabler/icons-react"
import Container from "../layout/container"

export default function Footer() {
   return (
      <footer>
         <Container
            className="w-full h-12 flex flex-col gap-2 justify-start text-logo-gray">
            <span className="flex gap-2 items-center">
               <p>Desenvolvido com</p>
               <IconHeart size={20} color="#ff0000"/>
               <p>e</p>
               <IconCoffee size={20} color="#b5842a"/>
            </span>
            <span>Todos os direitos reservados @ DRCode - Developer</span>
         </Container>
      </footer>
   )
}