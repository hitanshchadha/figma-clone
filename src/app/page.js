"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import Banner from "@/assets/landing/banner.jpg"
import Navbar from "@/components/navbar";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader"
import { useState } from "react";
import { SparklesPreview } from "@/components/Logo";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Keypad } from "@/components/ui/macbook-scroll";
import Link from "next/link"; 
import { Tabs } from "@/components/ui/tabs";
import ScrolltoTop from "@/components/scroll-to-top";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { inView } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";



export default function Home() {
  
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  const [loading, setLoading] = useState(true);
  const over=setTimeout(()=>setLoading(false),4000)
  const ref = useRef(null);
  const isInView = useInView(ref);
  

  const loadingStates = [
    {
      text: "Let me Cook",
    },
    {
      text: "Some More Cooking",
    },
    {
      text: "A little bit More",
    },
    {
      text: "Yeah! Welcome To Figma Clone",
    },
  ];
  return (
    <>
    <div className=" scroll-smooth homebg">
    
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
      
    {loading || 
        
          <>
          <Navbar></Navbar>


    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white ">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Figma Clone
              </span>
            </h1>
          </>
        }
      >
        <Image
          src= {Banner}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>


    </div>
    <div id="features" className="h-[20rem] -mt-48 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    <ScrolltoTop/>
   <div>
   <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
   </div>
    
    
    
    {
      
      <div ref={ref} id="pricing" className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
       <Vortex
      
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        <p>Price: $0.00</p>Design for Everyone.
        <Highlight className="text-black dark:text-white">
         Free Forever.
        </Highlight>
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-2xl mt-6 text-center">
        We believe in empowering creativity. By keeping our tool free, we ensure that everyone, from beginners to professionals, can access high-quality design tools without financial barriers.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button onClick={()=>{router.push('/Login',{shallow: true})}} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Get Started
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
       </Vortex>
    </div>
     }



    </>}

   
 
  
    
  
 





      

    </div>
    </>
  );
}
const DummyContent = () => {
  return (
    <Image
      src={Banner}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );}