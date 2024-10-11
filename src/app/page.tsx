import Container from "@/components/layout/container"
import Section from "@/components/layout/section"
import Aside from "@/components/layout/aside"
import { LoginForm } from "@/components/templates/login-form"

export default function Home() {
   return (
      <Container className="flex flex-col md:flex-row">
         <Section className="flex-col py-5 md:pr-20 md:tracking-wider">
            <p className="font-title font-semibold text-4xl text-logo-blue text-justify mb-10 md:text-5xl md:text-left">
               Conheça a Terasique!
            </p>
            <span className="flex text-3xl text-logo-gray text-justify mb-10">
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               </p>
            </span>
         </Section>
         <Aside className="flex items-center border-2 dark:border-zinc-500 rounded-xl h-max">
            <LoginForm/>
         </Aside>
      </Container>
   );
}
