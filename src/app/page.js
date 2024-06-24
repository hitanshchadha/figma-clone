import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import Banner from "@/assets/landing/banner.jpg"

export default function Home() {
  return (
    
    <div className=" bg-black">
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
    </div>
  );
}
