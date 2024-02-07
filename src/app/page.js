"use client";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col xl:w-[60%] justify-center mx-auto xl:p-8">
      <Header />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
