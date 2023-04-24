// components/AvalonFeatures.tsx
import React from 'react';

const AvalonFeatures: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h2
        className="text-center text-4xl font-bold mb-8 shadow-md py-2"
        style={{
          backgroundImage:
            'linear-gradient(to right, white, #E2E8F0, black)',
          backgroundSize: '100% 200%',
          backgroundPosition: 'right bottom',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Decentralized High-Performance Infrastructure
      </h2>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 1</h3>
            <p className="text-zinc-500">Feature 1 description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eius voluptates et fuga magni qui esse corrupti suscipit explicabo, unde, quaerat, deserunt cum nisi atque nulla. Eos, aperiam. Voluptatibus, deserunt?.</p>
          </div>
        </a>

        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 2</h3>
            <p className="text-zinc-500">Feature 2 description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam nemo vitae laborum corrupti quidem veniam, nesciunt amet inventore sed? Pariatur architecto nihil soluta ad ratione minima amet! Enim, sit?.</p>
          </div>
        </a>

        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 3</h3>
            <p className="text-zinc-500">Feature 3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur suscipit perspiciatis, unde aliquam fuga, hic dicta obcaecati sed iste laboriosam autem quos! Odio tempora reiciendis nesciunt aliquam earum? Possimus.</p>
          </div>
        </a>



        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 4</h3>
            <p className="text-zinc-500">Feature 4 description.</p>
          </div>
        </a>

        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 5</h3>
            <p className="text-zinc-500">Feature 5 description.</p>
          </div>
        </a>

        <a
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-black p-6 rounded-lg shadow-md border border-transparent hover:border-white hover:bg-black transition-colors duration-200 ease-in">
            <h3 className="text-xl text-slate-200 font-bold mb-2">Feature 6</h3>
            <p className="text-zinc-500">Feature 6 description.</p>
          </div>
        </a>
      </div>
    </div>

  );
};

export default AvalonFeatures;
