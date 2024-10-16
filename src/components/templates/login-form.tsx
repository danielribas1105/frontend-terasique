"use client";
import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

export function LoginForm() {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted");
   };
   return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black">
         <h2 className="font-title text-2xl text-logo-dark-green dark:text-green">
            Bem vindo a <strong>Terasique</strong>
         </h2>
         <p className="text-zinc-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Anamnese Individual
         </p>

         <form className="my-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
               <LabelInputContainer>
                  <Label htmlFor="firstname">Nome</Label>
                  <Input id="firstname" placeholder="Nome" type="text" />
               </LabelInputContainer>
               <LabelInputContainer>
                  <Label htmlFor="lastname">Sobrenome</Label>
                  <Input id="lastname" placeholder="Sobrenome" type="text" />
               </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
               <Label htmlFor="email">E-mail</Label>
               <Input id="email" placeholder="seuemail@provedor.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
               <Label htmlFor="password">Senha</Label>
               <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
               <Label htmlFor="twitterpassword">Confirme a senha</Label>
               <Input
                  id="twitterpassword"
                  placeholder="••••••••"
                  type="twitterpassword"
               />
            </LabelInputContainer>

            <button
               className="bg-gradient-to-br relative group/btn from-logo-dark-green dark:from-zinc-900 dark:to-zinc-900 to-logo-green block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
               type="submit"
            >
               Entrar &rarr;
               <BottomGradient />
            </button>
         </form>
      </div>
   );
}

const BottomGradient = () => {
   return (
      <>
         <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
         <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
   );
};

const LabelInputContainer = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
         {children}
      </div>
   );
};
