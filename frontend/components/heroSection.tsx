"use client";
import Link from "next/link";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TransParentButton from "./ui/TransparentButton";

export default function HeroSection() {
    
    const router = useRouter();

    const handlesubmit = () => {
        router.push("/detect");
    }

    return (
     
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white pt-4 pb-8 md:pt-6 md:pb-10 px-10 md:px-0 ">
                <div className="container relative z-10">
                    <div className="grid items-center justify-center gap-12 lg:grid-cols-2 mb-30 mt-12">
                        <div className="flex flex-col items-start justify-center space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center self-center lg:self-start rounded-full border border-pink-200 bg-white px-3 py-1 text-sm font-medium text-pink-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1 h-4 w-4"
                                >
                                    <path d="M2.5 18.5A9 9 0 1 1 21.5 9" />
                                    <path d="m14 3-3 3 3 3" />
                                </svg>
                                Early Detection Saves Lives
                            </div>
                            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                            <span className="text-pink-600">AI-Powered</span> Breast Cancer Detection
                            </h1>
                            <p className="max-w-lg text-lg text-gray-500 font-medium itesm-center">

                            Our advanced tool helps identify potential breast cancer indicators using machine learning. Early
                            detection <br /> 
                            significantly increases treatment success rates.

                            </p>
                            <div className="flex flex-wrap gap-4 md:justify-start justify-center ">
                                <Button onClick={handlesubmit}>

                                        Try Detection Tool
                                        
                                </Button>
                                <TransParentButton onClick={()=>{
                                        router.push("/detect")
                                    }}>
                                        
                                        Learn More
                                </TransParentButton>
                            </div>
                        </div>
                        <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-8 border-white shadow-xl lg:ml-auto">
                            <Image
                            src={'/bcancer.png'}
                            width={600}
                            height={600}
                            alt="Breast cancer awareness"
                            className="object-cover"
                            priority
                            />
                        </div>
                    </div>
                    <section id="detection" className="container py-12 md:py-16 mb-10">
                        <div className="mx-auto max-w-4xl space-y-6">
                            <div className="border border-gray-200 cursor-pointer rounded-lg  p-3 md:p-4 text-gray-500 font-xs">
                                <p className="font-medium text-foreground font-bold text-black">Disclaimer:</p>
                                <p className="mt-1">
                                    This tool is for educational purposes only and should not be used for medical diagnosis. Please consult
                                    with a healthcare professional for proper medical advice and diagnosis.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                
            </section>
    
    )
}