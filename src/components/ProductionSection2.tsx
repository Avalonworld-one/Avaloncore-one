// components/ProductionSection2.tsx
import React from 'react';
import Link from 'next/link';

const ProductionSection2 = () => {
  return (
    <section className="pt-20 py-20 px-4 sm:px-6 md:px-8 order-1 md:order-2">
      <div className="text-slate-200 flex flex-wrap justify-center items-center">

        {/* Text on the left */}
        <div className="w-full md:w-1/2 lg:w-1/2 px-8">
          <h1
            className="text-left text-3xl sm:text-4xl font-bold mb-8 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, .75))",
              backgroundSize: "100% 200%",
              backgroundPosition: "right bottom",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore AI in Real Estate
          </h1>

         <p className="font-light text-zinc-400 md:text-lg mb-4">
            Elevate your property investment with our AI tools. Smart, reliable predictions at your fingertips.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-4">
            AI Feature Score
          </h2>
          <p className="font-light text-zinc-400 md:text-lg mb-4">
            Get instant property insights. Bid with confidence, avoid overbidding.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-4">
            AI Bid Suggestions
          </h2>
          <p className="font-light text-zinc-400 md:text-lg mb-4">
            Make informed bids. AI-backed analysis for optimal pricing.
          </p>


          {/* "Learn More" button with custom styling */}
          <div className="mt-10 mb-20">
            <Link href="Live-in/avalon" legacyBehavior>
              <a className="inline-block dark:bg-amber-400 hover:bg-yellow-300 text-black font-normal py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                Learn More
              </a>
            </Link>
          </div>
        </div>

        {/* Local Video on the right */}
        <div className="w-full md:w-1/2 lg:w-1/2 px-8 order-1 md:order-2">
          <video 
            autoPlay
            loop
            muted
            style={{ maxWidth: '100%', height: 'auto' }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </section>
  );
};

export default ProductionSection2;
