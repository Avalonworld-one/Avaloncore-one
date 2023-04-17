import React from 'react';
import Image from 'next/image';
import ProductImage from '../assets/Twinmockup.svg';
import Link from 'next/link';

const ProductSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center py-8 md:py-16 px-4 gap-8">
      <div className="order-1 md:text-left text-center">
        <h2 className="font-sans tracking-wide font-bold text-4xl py-6 px-6 md:text-4xl text-center lg:text-5xl mb-4 leading-snug bg-gradient-to-r from-amber-400 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          TRANSFORM YOUR BUSINESS WITH AVALON
        </h2>

        <h3 className="font-sans tracking-tight text-center font-extrabold text-2xl md:text-2xl lg:text-3xl text-transparent mb-4 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text" style={{ backgroundSize: "200% 200%", backgroundPosition: "10% 0%, 30% 0%, 90% 0%" }}>
          Scholar Contract
        </h3>

        {/* 
          create big space between the two lines 
      */}

        <div className="text-zinc-400 text-center tracking-wider max-w-full py-6 px-8 lg-6 mx-auto lg:mx-0 text-xl/loose">Leverage our Smart-Contract powered platform for seamless hiring, automating income distribution, employer allocations, and identity management. Transform your hiring experience now.</div>
        {/*   
        <Link href="/contact" passHref>
          <button className="border border-gold-500 text-gold-500 px-4 py-2 hover:bg-gold-500 hover:text-white transition-colors">
            Contact us
          </button>
        </Link> ***set the last page*/}
      </div>
      <div className="order-2 flex justify-center items-center">
        <Image
          src={ProductImage}
          alt="Product image"
          width={551.3}
          height={475}
          quality={100}
        />
      </div>
    </div>
  );
};

export default ProductSection;
