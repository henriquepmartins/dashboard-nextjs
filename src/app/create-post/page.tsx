import { createPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Page() {
  return (
    <section className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Criar post</h1>
      <form 
      action={createPost}>
        <Input name="title" />
        <Button className="text-zinc-800 mt-10 p-6 hover:bg-amber-400 hover:text-white hover:font-bold">
          Enviar
        </Button>
      </form>
    </section>
  );
}
