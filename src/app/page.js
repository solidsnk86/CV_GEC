"use client";
import Head from "next/head";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://github.com/solidsnk86/CvOnline-modelo1/blob/master/img/cv.png?raw=true"
          type="image/x-icon"
        />
      </Head>
      <main className="flex flex-col xl:w-[60%] justify-center mx-auto xl:p-8">
        <Header />
        <About />
        <Experience />
        <Education />
        <Footer />
      </main>
    </>
  );
}
