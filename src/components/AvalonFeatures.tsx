// components/AvalonFeatures.tsx
//Main component of the landing page
import React from "react";

const AvalonFeatures: React.FC = () => {
  return (
    <section className="py-20 relative max-w-7xl mx-auto mt-20 sm:pt-24 lg:pt-32">
   
    {/* ... Header and other content ... */}
      <div className="flex-initial sm:flex-col lg:flex-row sm:items-center lg:items-baseline justify-start p-0 gap-0">
        <h1
          className="text-center items-center justify-center text-3xl sm:text-4xl font-bold mb-8 shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(#fff, hsla(0, 0%, 100%, .75))",
            backgroundSize: "100% 200%",
            backgroundPosition: "right bottom",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What&apos;s in AvalonCore?
        </h1>
        <p className="text-neutral-500 text-lg flex text-center items-center justify-center">
          Enhancing your metaverse journey with Indispensable services.
        </p>
      </div>

      {/* Columns Container */}
      <div className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-12 justify-center">
        <h2 className="sr-only">AvalonFeatures</h2>

         {/* Grid settings for responsive design */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       
       
          {/* column one */}
          <ul className="space-y-8">
            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/avalon-core-features"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black rounded-lg p-6 shadow-md border border-zinc-900 hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                    <p>
                      <span className="font-bold">Avalon:</span> Powering diverse applications from gaming to real
                      estate, enabling creators and entrepreneurs to thrive in
                      the digital realm.
                    </p>
                  </blockquote>
                  <div className="flex-auto">
                    <div className="text-base text-slate-200 font-semibold">
                      <span>Empowering Creativity in the Digital Frontier</span>
                    </div>
                  </div>
                </figure>
              </li>
            </a>

        
          </ul>

          {/* Column two */}
          <ul className="space-y-8 sm:block">
            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                  <p>
                  <span className="font-bold">AI:</span> Tailoring smarter metaverse experiences.</p>
                  <p>
                  <span className="font-bold">Security:</span> Robust security for your digital universe.</p>
                  
                  </blockquote>
                    <div className="flex-auto">
                      <div className="text-base text-slate-200 font-semibold">
                        <span>AI & Security</span>
                      </div>
                    </div>
                </figure>
              </li>
            </a>

            {/* <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm  font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                  <p>
                      Avalon: Powering diverse applications from gaming to real
                      estate, enabling creators and entrepreneurs to thrive in
                      the digital realm.
                    </p>
                  </blockquote>
                    <div className="flex-auto">
                      <div className="text-base text-slate-200 font-semibold">
                        Feature 4
                      </div>
                    </div>
                </figure>
              </li>
            </a> */}

          </ul>

          {/* Column three */}
          <ul
            className="space-y-8 lg:block"
          >
            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm  font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                    <p>
                    <span className="font-bold">Transparency:</span> Full transparency for user trust.</p>
                    <p>
                    <span className="font-bold">Blockchain:</span> Blockchain: Stability in the virtual world.</p>
                    <p>
                    <span className="font-bold">Smart Contract:</span> Smart Contracts: Automate with confidence.
                    </p>
                  </blockquote>
                    <div className="flex-auto">
                      <span className="text-base text-slate-200 font-bold mb-2">
                      Trust & Innovation
                      </span>
                    </div>
                </figure>
              </li>
            </a>

            {/* <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm  font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                    <p className="text-zinc-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, adipisci quam repudiandae harum iure odit sed, aut
                      vel eaque, voluptas labore nisi omnis. Dolores temporibus
                      eligendi quibusdam ea minus tenetur..
                    </p>
                  </blockquote>
                    <div className="flex-auto">
                      <span className="text-base text-slate-200 font-bold mb-2">
                        Feature 8
                      </span>
                    </div>
                </figure>
              </li>
            </a> */}

            {/* <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm  font-extralight leading-6">
                <figure className="relative flex flex-col-reverse bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-400">
                    <p className="text-zinc-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, adipisci quam repudiandae harum iure odit sed, aut
                      vel eaque, voluptas labore nisi omnis. Dolores temporibus
                      eligendi quibusdam ea minus tenetur..
                    </p>
                  </blockquote>
                    <div className="flex-auto">
                      <span className="text-base text-slate-200 font-bold mb-2">
                        Feature 9
                      </span>
                    </div>
                </figure>
              </li>
            </a> */}


          </ul>

      
      </div>
      </div>
    </section>

  );
};

export default AvalonFeatures;
