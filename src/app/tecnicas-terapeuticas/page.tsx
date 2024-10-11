import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function TecnicasTerapeuticas() {
   return (
      <Container className="my-4">
         <Section className="flex flex-col gap-2 text-logo-gray text-center text-3xl md:text-4xl">
            <p>
               Conheça algumas de nossas técnicas voltadas para o TCC
            </p>
            <p className="font-semibold">
               Terapia Cognitiva Comportamental
            </p>
         </Section>
      </Container>
   )
}