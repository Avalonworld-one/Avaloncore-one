// components/ProductSection.tsx
// Main component of the landing page
import React from "react";
import Image from "next/image";
import ProductImage from "../assets/twinmockf.svg";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section className="pt-20 px-4 sm:px-6 md:px-8" id="scholar-contract">
      <div className="text-slate-200 flex flex-wrap justify-between items-center">
        <div className="col-lg-6 my-8 md:my-0">
          <Image
            src={ProductImage}
            alt="Product image"
            width={551.3}
            height={636}
            quality={100}
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <p className="font-light whitespace-nowrap mb-4 text-zinc-400">
            Step into the Avalon Ecosystem.
          </p>
          <h1
            className="text-left items-center justify-center text-3xl sm:text-4xl font-bold mb-8 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, .75))",
              backgroundSize: "100% 200%",
              backgroundPosition: "right bottom",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Boost GameFi with Scholar Contracts
          </h1>

          <p className="font-light text-zinc-400 md:text-lg mb-4">
            Personalize rewards and delegate income sharing to Avalon&apos;s
            automated smart contracts. Manage digital assets effortlessly with
            Avalon Wallet. Take advantage of Avalon&apos;s robust features,
            including analytics and decentralized identity solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
