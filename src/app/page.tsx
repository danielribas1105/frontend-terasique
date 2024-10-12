import Image from "next/image"
import Container from "@/components/layout/container"
import Section from "@/components/layout/section"
import Aside from "@/components/layout/aside"
import { LoginForm } from "@/components/templates/login-form"
import logoFull from "@/../public/img/logo/logo-terasique-full.png"

export default function Home() {
   return (
      <Container className="flex flex-col md:flex-row">
         <Section className="flex-col gap-3 py-5 md:pr-20 md:tracking-wider">
            <div className="flex flex-col-reverse items-center md:items-start md:flex-row gap-5">
               <Image 
                  src={logoFull} 
                  alt={"Imagem da logo Terasique"}
                  width={300}
                  height={300}
                  className="rounded-lg border-2 border-logo-green"
               />
               <div className="flex-col items-center md:items-start gap-3 pt-5 md:block hidden">
                  <p className="text-logo-green text-5xl font-title">Bem vindo a Terasique</p>
                  <p className="text-zinc-600 text-3xl">Anamnese Individual</p>
               </div>
            </div>
            <span className="flex text-3xl text-logo-gray text-justify mb-10">
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               </p>
            </span>
         </Section>
         <Aside className="flex items-center border-2 dark:border-zinc-500 rounded-xl h-max">
            <LoginForm/>
         </Aside>
      </Container>
   );
}
