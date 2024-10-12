import { IconCode, IconHeart, IconMug } from "@tabler/icons-react"
import Container from "../layout/container"

export default function Footer() {
   return (
      <footer>
         <Container
            className="w-full h-12 flex flex-col gap-1 justify-start text-zinc-500 mt-5 mb-5">
            <div className="flex gap-2 items-center justify-center md:justify-start">
               <p>Desenvolvido com</p>
               <IconHeart size={20} color="#ff0000"/>
               <p>e</p>
               <IconMug size={22} color="#b5842a"/>
               <p>por</p>
               <IconCode size={22} color="#5e17eb"/>
               <p>DRCode</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
               <p>@2024 - Todos os direitos reservados</p>
            </div>
         </Container>
      </footer>
   )
}