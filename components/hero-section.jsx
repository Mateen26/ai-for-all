import {  Phone } from 'lucide-react'
import aiCircle from "@/public/images/ai-circle.svg"
import Image from "next/image"
import Link from "next/link"
import AppStore from "@/public/images/App-Store.svg"
import GooglePlay from "@/public/images/Google-Play.svg"
import bgGraphics from "@/public/images/bg-graphics.svg"
export function HeroSection() {
  return (<>
    <section className="container relative grid lg:grid-cols-2 gap-8 py-12 md:py-16 items-center">
      {/* Background graphics */}
      <div className="hidden md:block absolute -top-[74px] -right-[174px] -z-10">
        <Image
          src={bgGraphics}
          alt="Background pattern"
          width={1200}
          height={1200}
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Let our{" "}
          <span className="relative">
            <span className="text-[#26B573]">AI</span>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[100px] h-[29px]">
              <Image src={aiCircle} alt="Hero Section Divider" width={140} height={29} />
            </span>
          </span>{" "}
          do all for <br /> you!
        </h1>
        <p className="text-lg text-black w-full md:w-[450px]">
          Agent4 lets you create custom voice experiences for callers to your business or mobile phone. Have an intelligent
          agent answer or place calls with your voice, your content and connected to your systems.
        </p>
        <div className="flex gap-4 pt-[31px]">
          <Link href="#" className="inline-block">
            <Image
              src={AppStore}
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10" />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src={GooglePlay}
              alt="Get it on Google Play"
              width={120}
              height={40}
              className="h-10" />
          </Link>
        </div>
      </div>
      <div className="text-center space-y-6 flex justify-center items-center flex-col">
        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-medium text-[#26B573]">
            Want to see in action!
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="text-xl md:text-2xl font-medium flex items-center gap-2">
              <span className="bg-[#26B573] p-2 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </span>
              <span className="text-[#26B573]">Dial</span>
            </p>
            <a 
              href="tel:+18254621436"
              className="text-[#26B573] text-2xl md:text-3xl font-medium hover:opacity-80 transition-opacity"
            >
              +1 825 462 1436
            </a>
          </div>
        </div>
      
      </div>
    </section>
 </> );
}

