import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/ui/button";
import { MarqueImg } from "@/components/ui/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex-col w-full pb-24">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center my-8">
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl text-center lg:text-left md:text-6xl leading-tight">
                    <span className="relative inline-block text-outline font-extrabold md:text-8xl cursor-pointer group transition-all duration-300 hover:scale-105">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                        Praktice.AI
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10"></div>
                    </span>
                    <br />
                    <span className="text-gray-600 font-bold text-2xl md:text-4xl bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent hover:from-gray-600 hover:to-gray-400 transition-all duration-300 cursor-pointer">
                      – Your AI Superpower for Interview Success
                    </span>
                  </h2>

                  <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed backdrop-blur-sm bg-white/50 p-6 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300">
                    <span className="font-semibold text-gray-800">Unlock a smarter way</span> to prepare, practice, and perfect your interviews. With 
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI-driven insights</span>, 
                    <span className="font-semibold text-gray-800"> Praktice.AI</span> boosts your confidence, sharpens your skills, and increases your chances of landing the job.
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <a 
                      href="https://github.com/urstrulyPrateeK/Praktice.AI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src="/assets/img/Praktice.png"
                        alt="Praktice.AI Interface"
                        className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            <span className="font-semibold text-neutral-800">Praktice.AI</span> <span className="text-sm text-neutral-600">© 2025</span>
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI Interview Coach
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Practice with our AI-powered interview simulator. Get real-time feedback, 
              improve your responses, and boost your confidence for any interview scenario.
            </p>

            <Link to={"/generate"}>
              <Button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Practice <Sparkles className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.png"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-gray-700 block mb-2">How Praktice.AI Works:</span>
              Our AI analyzes your responses in real-time, evaluates communication skills, and provides 
              instant feedback on content quality, body language, and confidence levels. Practice with 
              industry-specific questions, receive personalized improvement suggestions, and track your 
              progress to master any interview scenario.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;