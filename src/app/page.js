"use client";

import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="flex flex-col xl:max-w-4xl justify-center mx-auto xl:shadow-md xl:p-10">
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
