import Navbar from "@/components/navbar";
import Image from "next/image";
import bgImage from "@/assets/bg-image.jpg";
import ThreeJSComponent from "@/components/ThreeJSComponent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeJSComponent />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 z-10 pointer-events-none">
          <Navbar />
          <div className="flex justify-center mt-40 h-full">
            <h1 className="text-4xl md:text-6xl font-semibold text-white text-center animate-fadeIn">
              Welcome to the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse">
                Official Web Page
              </span>
              <br />
              of Luna Club GTBIT
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
