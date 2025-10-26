import { Hero } from "@/components/Hero";
import { Strategy } from "@/components/Strategy";
import { Sectors } from "@/components/Sectors";
import { Differentiators } from "@/components/Differentiators";
import { OurProcess } from "@/components/OurProcess";
import { Contact } from "@/components/Contact";
import  Services  from "@/components/Services";

export default function Home() {
  return (
    <>
    <Hero />
    <Strategy />
    <Services />
    <Sectors />
    <Differentiators />
    <OurProcess />
    <Contact />
    </>
  );
}
