"use client";
import { About } from "@/components/About";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/solidsnk86/CvOnline-modelo1/master/img/cv.png"
        />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/solidsnk86/CvOnline-modelo1/master/img/cv.png"
          type="image/x-icon"
        />
      </Head>
      <main className="flex flex-col xl:w-[60%] justify-center mx-auto xl:p-8">
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
