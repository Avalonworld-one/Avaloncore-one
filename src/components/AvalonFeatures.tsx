// components/AvalonFeatures.tsx
import React from "react";

const AvalonFeatures: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg-pt-32 ">
      <div className="flex-initial sm:flex-col lg:flex-row sm:items-center lg:items-baseline justify-start p-0 gap-0">
        <h1
          className="text-center items-center justify-center text-4xl sm:text-5xl font-bold mb-8 shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffff, hsla(0, 0%, 100%, .75))",
            backgroundSize: "100% 200%",
            backgroundPosition: "right bottom",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What&apos;s in AvalonCore?
        </h1>
        <p className="text-zinc-500 flex text-center items-center justify-center">
          Enhancing your metaverse journey with Indispensable services.
        </p>
      </div>

      <span className="sr-only">AvalonFeatures</span>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-12 justify-center">
          <ul className="space-y-8">
            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm leading-6">
                <figure className="relative flex flex-col-reverse bg-black rounded-lg p-6 shadow-md border border-zinc-900 hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-500">
                    <p>
                      Avalon: Powering diverse applications from gaming to real
                      estate, enabling creators and entrepreneurs to thrive in
                      the digital realm.
                    </p>
                  </blockquote>
                  <div className="flex-auto">
                    <div className="text-base text-slate-200 font-semibold">
                      <span>Flexible Metaverse Infrastructure</span>
                    </div>
                  </div>
                </figure>
              </li>
            </a>

            {/* 2 rows 1 column */}
            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm leading-6">
                <figure className="relative flex flex-col-reverse bg-black rounded-lg p-6 shadow-md border border-zinc-900 hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-500">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nulla pariatur laborum placeat rerum explicabo quibusdam
                      est repellat inventore beatae quaerat aspernatur optio
                      atque consectetur ducimus exercitationem assumenda,
                      doloremque tempora iusto.
                    </p>
                  </blockquote>
                  <div className="flex-auto">
                    <div className="text-base text-slate-200 font-semibold">
                      <span>Head2</span>
                    </div>
                  </div>
                </figure>
              </li>
            </a>

            <a
              href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-sm leading-6">
                <figure className="relative flex flex-col-reverse bg-black rounded-lg p-6 shadow-md border border-zinc-900 hover:border-white hover:bg-black transition-colors duration-200 ease-in">
                  <blockquote className="mt-6 text-zinc-500">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nulla pariatur laborum placeat rerum explicabo quibusdam
                      est repellat inventore beatae quaerat aspernatur optio
                      atque consectetur ducimus exercitationem assumenda,
                      doloremque tempora iusto.
                    </p>
                  </blockquote>
                  <div className="flex-auto">
                    <div className="text-base text-slate-200 font-semibold">
                      <span>Head3</span>
                    </div>
                  </div>
                </figure>
              </li>
            </a>
          </ul>

          <a
            href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
              <h3 className="text-xl text-slate-200 font-bold mb-2">
                Feature 4
              </h3>
              <p className="text-zinc-500">Feature 4 description.</p>
            </div>
          </a>

          <a
            href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
              <h3 className="text-xl text-slate-200 font-bold mb-2">
                Feature 5
              </h3>
              <p className="text-zinc-500">Feature 5 description.</p>
            </div>
          </a>

          <a
            href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
              <h3 className="text-xl text-slate-200 font-bold mb-2">
                Feature 6
              </h3>
              <p className="text-zinc-500">Feature 6 description.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvalonFeatures;
