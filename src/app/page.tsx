import Navbar from "@/components/navbar";
import Image from "next/image";
import bgImage from "@/assets/bg-image.jpg";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src={bgImage}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 z-10">
          <Navbar />
        <div className="flex justify-center mt-40 h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center animate-fadeIn">
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
  );
}
